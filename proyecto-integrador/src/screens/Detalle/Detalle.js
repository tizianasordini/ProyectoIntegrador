import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Detalle extends Component {

    constructor(props){
        super(props)
        this.state={
          id: this.params.id,
          canciones: []
        }
    }
    
    componentDidMount(){
      console.log("estamos aca");
      fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${this.state.id}`)
        .then(response => response.json())
        .then(data => this.setState({
          canciones: data.data
          
        }))
        .catch(error => console.log('El error fue ' + error))
      }
        
      render(){
        return (
      
          <div className='cancionDetalle'>
            <img
              src={`${this.canciones.cover}`}
              alt={`Imagen del album de ${this.canciones.title}`}
            />
            <h1>{this.canciones.title}</h1>
            <h2>{this.canciones.artist.name}</h2>
            <h3>{this.canciones.album.title}</h3>
            <p>Genero</p>
            <p>Fecha de publicación</p>

          </div>
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
