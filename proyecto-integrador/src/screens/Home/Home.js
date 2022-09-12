import React, {Component} from "react";
import './Home.css'; 
import Cancion from '../../component/Cancion/Cancion';
import { Link } from "react-router-dom";



class Home extends Component {
    constructor(){  //fijarse si agregar props
        super()  
        this.state ={
            buscador:'',
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
    render(){
        return (
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