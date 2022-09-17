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
    
    let storage = localStorage.getItem("favoritos")
    if(storage !== null){
      let parsedStorage = JSON.parse(storage)
      console.log(parsedStorage)


        parsedStorage.map(elm => {
          return(
            fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${elm}`)
            .then(resp => resp.json())
    
            .then((data) => this.setState({ favoritos: this.state.favoritos.concat(data) }))

            .catch(err => console.log(err))  
          )

        })

    
  }
}

  render() {
    console.log(this.state.favoritos)
    return (
      <>
      <section className='cancion-container'>
        {this.state.favoritos.length !== 0 ? this.state.favoritos.map((favorito,idx) => <Cancion key={favorito.title + idx} Albums={favorito} />):<p>No tenes favoritos</p>}
                
      </section>

      </>
    )
  }
}

export default Favoritos;