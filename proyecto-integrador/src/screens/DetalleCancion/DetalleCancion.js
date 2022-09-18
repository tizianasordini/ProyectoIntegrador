import React, {Component} from 'react';
import './DetalleCancion.css'


class DetalleCancion extends Component {

    constructor(props){
        super(props)
        this.state={
          id: this.props.match.params.id,
          canciones: [],
          loader: true
        }
    }
    
    componentDidMount(){
      fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${this.state.id}`)
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
            src={`https://e-cdns-images.dzcdn.net/images/cover/${this.state.canciones.album.md5_image}/1000x1000-000000-80-0-0.jpg`}
            alt={this.state.canciones.title} /> 
            <h1>Nombre de la cancion: {this.state.canciones.title}</h1>
            <h3>Nombre del artista: {this.state.canciones.artist.name}</h3>
            <p>Fecha de publicación: {this.state.canciones.release_date}</p>
            <br></br>
          </div>
          }
          </>
        )
        
      }
}

export default DetalleCancion;
  