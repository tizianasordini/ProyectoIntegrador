import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import './Cancion.css';

class Cancion extends Component{
    constructor(props){
        super(props)
        this.state = {
            //cosas de favoritos
            descripcion: ''
        }
    }

    masInformacion() {
        this.setState({
            descripcion: this.props.topCanciones.overview 
        })
    }

    menosInformacion(){
        this.setState({
            descripcion: ''
        })
    }

    render() {
        return (
            <React.Fragment>
                <artincle className='cacion-tarjeta'>
                    {/* <Link className='cancion-contenido' to={`/detalle/id/${this.props.topCanciones.id}`}>
                        <img src={`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10${this.props.topCanciones.poster_path}`} alt={this.props.topCanciones.title} /> 
                        <h2>{this.props.topCanciones.title}</h2>
                        <p>{this.state.descripcion}</p>
                    </Link> */} aca hay que poner otra url. 
                    {
                        this.state.descripcion === ''   //haciendo funcionalidad para ver mas o menos informacion sobre la descripcion de las tarjetas
                        ? <p onClick={() => this.masInformacion()}>Ver mas informacion</p>
                        : <p onClick={() => this.menosInformacion()}>Ver menos informacion</p>
                    }
                
                </artincle>
            </React.Fragment>
        )
    }
}

export default Cancion; 