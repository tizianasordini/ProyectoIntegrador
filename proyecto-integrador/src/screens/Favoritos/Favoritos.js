import React, { Component } from 'react'
import "./Favoritos.css"
import Cancion from "../../component/Cancion/Cancion"

class Favoritos extends Component {
  constructor(){
    super()
    this.state={
      favoritos: [],
      
    }
  }

  componentDidMount(){
    this.setState({favoritos: JSON.parse(localStorage.getItem('favoritos'))})
  }

  render() {
    return (
      <>
      <section className='cancion-container'>
                {
                    this.state.topCanciones.slice(0,6).map((musica,idx) => <Cancion key={musica.title + idx} topCanciones={musica} />)
                }
                </section>
      </>
    )
  }
}

export default Favoritos;