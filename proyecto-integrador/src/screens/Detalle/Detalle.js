import React, {Component} from 'react';
import { Link, useParams } from "react-router-dom";

class Detalle extends Component {

    constructor(props){
        super(props)
        this.state={
          id: this.props.match.params.id,
          canciones: [],
          loader: true
        }
    }
    
    componentDidMount(){
      console.log("empiezo allá");
      fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${this.state.id}`)
        .then(response => response.json())
        .then(data => this.setState({
          canciones: data,
          loader: false
          
          
        }))
        .catch(error => console.log('El error fue ' + error))
      }
        
      render(){
        console.log("empiezo acá");
        console.log(this.state.canciones.artist);
        return (
          <>
          {this.state.loader ?
          <h2>Cargando...</h2> :
          <div className='cancionDetalle'>
            <img 
            src={`https://e-cdns-images.dzcdn.net/images/cover/${this.state.canciones.md5_image}/120x120-000000-80-0-0.jpg`}
            alt={this.state.canciones.title} /> 
            <h1>{this.state.canciones.title}</h1>
            <h2></h2>
         
            <p>Genero</p>
            <p>Fecha de publicación: {this.state.canciones.release_date}</p>

          </div>
          }
          </>
        )
        
      }
}

export default Detalle
  


/*Detalle de una canción
Foto de la tapa del disco que contiene la canción.
Nombre de la canción.
Nombre del artista.
Nombre del disco al que pertenece la canción.
El player para escuchar la canción.
Detalle del  álbum:
Foto de la tapa del disco.
Nombre del disco.
Nombre del artista.
Nombre del Género al que pertenece el artista.
Fecha de publicación.
Lista de canciones del disco.*/
