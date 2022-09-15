import React, {Component} from 'react';

class Detalle extends Component {
/*
  constructor(props){
      super(props)
      this.state={
        id:props.match.params.id,
        cancion:{}
      }
  }

  componentDidMount(){
    fetch(`https://thingproxy.freeboard.io/fetch/api.deezer.com/track/${this.state.id}`)
    .then(resp => resp.json())
    .then(data => this.setState({
        cancion: data
    }))
    .catch(err => console.log(err))
  }
}*/

/*import React, {Component} from 'react'

class Details extends Component {
    constructor(props){
        super(props)
        this.state={
            id: props.match.params.id,
            character:{}
        }
    }

    componentDidMount(){
        console.log('pasa por aqui')
        fetch(`https://rickandmortyapi.com/api/character/${this.state.id}`)
        .then(resp => resp.json())
        .then(data => this.setState({
            character: data
        }))
        .catch(err => console.log(err))
    }

    render(){
        return (
          <div>
              <img src={this.state.character.image} />
          </div>
        )
    }
}

export default Details*/
  


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
}

export default Detalle