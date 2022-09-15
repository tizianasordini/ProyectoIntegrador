import React, {Component} from "react";
import './Home.css'; 
import Cancion from '../../component/Cancion/Cancion';
import { Link } from "react-router-dom";



class Home extends Component {
    constructor(){  //fijarse si agregar props
        super()  
        this.state ={
            input:'',
            data: [],
            topCanciones: [],
           // loader: true

        }
    }
    componentDidMount(){
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10')
        .then(response => response.json()) //parciamos a json
        .then(data => this.setState({
            topCanciones: data.results,
           // loader: false
        }))
        .catch(error => console.log('El error fue:'+ error)) //preguntar si esta bien el catch
    }

    //hacer buscador

    //preenir que se recargue la pagina
    preventRecharge(event){
        event.preventDefault()   //acordarse que e -> es abreviacion de event!
    }

    //guardar los cambio

    saveChanges(event){
        this.setState({input: event.target.value}, () => {  //como vimos en clase target es donde se encuentra el input.(lo que queremos modificar)
            console.log(this.state.input);
            this.buscador()
        })
    }

    // buscador(){
    //     if (this.state.input !=='') {
    //         fetch() //aca va la api key de canciones 
    //         .then (res=> res.json())
    //         .then(data => {
    //             this.setState ({data:data.results}, () => console.log(data.results))
    //         })
    //         .catch (e => console.log(e))
    //     }
    // }

    render(){
        return (

            this.state.input.length === 0 ?
            //termino de configurar el buscador con onSubmit y OnChange
            <React.Fragment>
                <form onSubmit={(event) => this.preventRecharge(event)}>
                    <input type='text' placeholder='cancion' onChange={(event)=> this.saveChanges(event)} value={this.state.input} />
                    <input type='submit' value='submit'/>  
                </form>
            </React.Fragment> //falta
            : //si no pongo los dos puntos no separo entonces salta error. 


           /* this.state.loader === true? /*  inserto if ternario, esto nos sirve para cuando creemos el loader
            (<img src={loader} alt= 'cargando la pagina' className='imagenLoader' />) */
            <React.Fragment>
                <h1>Top 10 Canciones</h1>
                <Link to='/VerTodas'>Ver Todas</Link>
                <section className='cancion-container'>
                {
                    this.state.topCanciones.slice(0,6).map((Cancion,idx) => <Cancion key={Cancion.title + idx} topCanciones={Cancion}/>)
                }
                </section>
            </React.Fragment>
        )
    }
}

export default Home; 