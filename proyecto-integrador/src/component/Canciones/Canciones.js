import React, {Component} from 'react'
import Cancion from "../Cancion/Cancion"

class Canciones extends Component {
    constructor(props){
      super(props)
      this.state={
        canciones: []
      }
    }

    componentDidMount(){
        fetch("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log("El error fue:" + error))
    }

  render(){
    return (
      <>
        <h2>¡Todas las canciones!</h2>
      </>
    )
  }
}

export default  Canciones