import React, {Component} from "react";
import './Canciones.css'; 
import Cancion from '../../component/Cancion/Cancion';

class Canciones extends Component {
    constructor(){  
        super()  
        this.state ={
            input:'',
            topCanciones: [],
        }
    }
    componentDidMount(){
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums&top')
        .then(response => response.json()) 
        .then(data => this.setState({
            topCanciones: data.data,
           // loader: false
        }))
        .catch(error => console.log('El error fue:'+ error)) 
    }

    //preenir que se recargue la pagina
    preventRecharge(event){
        event.preventDefault()   
    }

    //guardar los cambio

    saveChanges(event){
        this.setState({input: event.target.value}, () => {  //como vimos en clase target es donde se encuentra el input.(lo que queremos modificar)
            console.log(this.state.input);
            this.buscador()
        })
    }

    buscador(){
        if (this.state.input !=='') {
            fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=${this.state.input}`) 
            .then (res=> res.json())
            .then(data => {
                this.setState ({topCanciones:data.data})  
            })
            .catch (e => console.log(e))
        }
        else{
            fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums&top?limit=10')
            .then(response => response.json()) //parciamos a json
            .then(data => this.setState({
                topCanciones: data.data,
               // loader: false
            }))
            .catch(error => console.log('El error fue:'+ error))   
        }
    }

    render(){
        return (
            //termino de configurar el buscador con onSubmit y OnChange
            <React.Fragment>
                <form onSubmit={(event) => this.preventRecharge(event)}>
                    <input type='text' placeholder='Album' onChange={(event)=> this.saveChanges(event)} value={this.state.input} />
                    <input type='submit' value='submit'/>  
                </form>
                {this.state.input === "" ? <h1>¡Todas los álbumes!</h1>: <h1>usted busco por el termino {this.state.input}</h1>}  {/* me permite especificar ´por que estoy buscando, puede ser canciones o albums */}
                
                <section className='cancion-container'>
                {
                    this.state.topCanciones.map((musica,idx) => <Cancion key={musica.title + idx} topCanciones={musica} />)
                }
                </section>
            </React.Fragment>
        )
    }
}

export default Canciones; 