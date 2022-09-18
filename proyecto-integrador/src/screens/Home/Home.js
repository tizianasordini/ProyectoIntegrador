import React, {Component} from "react";
import './Home.css'; 
import Cancion from '../../component/Cancion/Cancion';
import topMusica from "../../component/topMusica/topMusica";
import { Link } from "react-router-dom";



class Home extends Component {
    constructor(){  //fijarse si agregar props
        super()  
        this.state ={
            input:'',
            Albums: [],
            topCanciones: [],
            loader: true
        }
    }
    componentDidMount(){
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums&top?limit=10')
        .then(response => response.json()) //parciamos a json
        .then(data => this.setState({
            Albums: data.data,
            loader: false
        }))
        .catch(error => console.log('El error fue:'+ error)) //preguntar si esta bien el catch

        //top artista
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10')
        .then(response => response.json()) //parciamos a json
        .then(data => this.setState({
            topCanciones: data.data,
            loader: false
        }))
        .catch(error => console.log('El error fue:'+ error)) 
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

    buscador(){    //este buscador busca tanto por nombre de autor,cancion y album 
        if (this.state.input !=='') {
            fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search/album?q=${this.state.input}`) //aca va la api key de canciones 
            .then (res=> res.json())
            .then(data => {
                this.setState ({Albums:data.data})  /* busca tanto por cancion, comno por album y artista */
            })
            .catch (e => console.log(e))
        }
        else{
            fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums&top?limit=10')
            .then(response => response.json()) //parciamos a json
            .then(data => this.setState({
                Albums: data.data,
                loader: false
            }))
            .catch(error => console.log('El error fue:'+ error)) //preguntar si esta bien el catch   
        }
    }



    render(){
        console.log("estamos aca 1")
        return (
            //termino de configurar el buscador con onSubmit y OnChange
            <React.Fragment>
                <form onSubmit={(event) => this.preventRecharge(event)}>
                    <input type='text' placeholder='Buscar...' onChange={(event)=> this.saveChanges(event)} value={this.state.input} />
                    <input type='submit' value='submit'/>  
                </form>
                <div>
                {this.state.input == "" ? <h1>Top 10 Álbumes</h1>: <h1>usted busco por el termino {this.state.input}</h1>}  {/* me permite especificar ´por que estoy buscando, puede ser canciones o albums */}
                
                <Link to='/Canciones'>Ver Todas</Link>

                {this.state.loader ?
                <h2>Cargando...</h2> :
                <section className='cancion-container'>
                {
                    this.state.Albums.slice(0,6).map((musica,idx) => <Cancion key={musica.title + idx} Albums={musica} />)
                }
                </section>
                }
                </div>
                <div>
                <h1>Top 10 Canciones</h1>  {/* me permite especificar ´por que estoy buscando, puede ser canciones o albums */}
                
                <Link to='/Canciones'>Ver Todas</Link>
                <section className='cancion-container'>
                {
                    this.state.Albums.slice(0,6).map((musica,idx) => <Cancion key={musica.title + idx} Albums={musica} />)
                }
                </section>
                </div>
            </React.Fragment>
        )
    }
}

export default Home; 