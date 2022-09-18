import React, {Component} from 'react';
import { Link, useParams } from "react-router-dom";
import './Detalle.css'

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
      fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${this.state.id}`)
        .then(response => response.json())
        .then(data => this.setState({
          canciones: data,
          loader: false
          
          
        }))
        .catch(error => console.log('El error fue ' + error))
      }
      
        
      render(){
        console.log(this.state.canciones);
        return (
          <>
          {this.state.loader ?
          <h2>Cargando...</h2> :
          <div className='cancionDetalle'>
            <img 
            src={`https://e-cdns-images.dzcdn.net/images/cover/${this.state.canciones.md5_image}/1000x1000-000000-80-0-0.jpg`}
            alt={this.state.canciones.title} /> 
            <h1>Nombre del album: {this.state.canciones.title}</h1>
            <h3>Nombre del artista: {this.state.canciones.artist.name}</h3>
            <p>Genero: {this.state.canciones.genres.data[0].name}</p>
            <p>Fecha de publicación: {this.state.canciones.release_date}</p>
            <br></br>
            Canciónes:
            <ul>
              
               {this.state.canciones.tracks.data.map((cancion) => <li><p>{(cancion.title)}</p></li>)}
              
            </ul>
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
El player para escuchar la canción.*/
