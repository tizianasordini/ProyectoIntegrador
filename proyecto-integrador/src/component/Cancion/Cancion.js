import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import './Cancion.css';

class Cancion extends Component{
    constructor(props){
        super(props)
        this.state = {
            //cosas de favoritos
            descripcion: '',
            mostrarMas:false
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
        {console.log("LLega a cada pelicula", this.props.topCanciones)}
        return (
            <React.Fragment>
                <article className='cacion-tarjeta'>
                    {<Link className='cancion-contenido' to={`/detalle/id/${this.props.topCanciones.id}`}>
                        <img src={``} alt={this.props.topCanciones.title} /> 
                        <h2>{this.props.topCanciones.title}</h2>
                        <p>{this.state.descripcion}</p>
                    </Link> } 

                    {
                        this.state.descripcion === ''   //haciendo funcionalidad para ver mas o menos informacion sobre la descripcion de las tarjetas
                        ? <p onClick={() => this.masInformacion()}>Ver mas informacion</p> // me puedo hacer un if diciendo si mostras mas false y si si true
                        : <p onClick={() => this.menosInformacion()}>Ver menos informacion</p>
                    }
                
                </article>
            </React.Fragment>
        )
    }
}

export default Cancion; 