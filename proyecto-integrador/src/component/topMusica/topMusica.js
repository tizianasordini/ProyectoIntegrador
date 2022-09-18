import React, {Component} from 'react'
import { Link } from 'react-router-dom';


class TopMusica extends Component{
    constructor(props){
        super(props)
        this.state = {
            //cosas de favoritos
            mostrarMas:false
        }
    }


    masInformacion() {
        this.setState({
            mostrarMas: true
        })
    }

    menosInformacion(){
        this.setState({
            mostrarMas: false
        })
    }

    agregarysacarDeFav(id){
        let fav = []
        let obtenerFav = localStorage.getItem("favoritos")
        if (obtenerFav !== null) {
            fav = JSON.parse(obtenerFav)}
            if (fav.includes(id)) {
                fav = fav.filter((elm) => elm !== id)
            } else { 
                fav.push(id)
            }
        
        let localFav = JSON.stringify(fav)
        localStorage.setItem("favoritos", localFav)
        console.log(fav)
    }

    render() {
        console.log("ESTAMOS ACA");
        {console.log(this.props.topCanciones)}
        return (
            <React.Fragment>
                <article className='cacion-tarjeta'>
                    {<Link className='cancion-contenido' to={`/DetalleCancion/id/${this.props.topCanciones.id}`}>
                        <img src={`https://e-cdns-images.dzcdn.net/images/artist/${this.props.topCanciones.md5_image}/120x120-000000-80-0-0.jpg`} alt={this.props.topCanciones.title} /> 
                        <h2>{this.props.topCanciones.title}</h2>
                        <p>{this.state.descripcion}</p>
                    </Link> } 

                    {
                        this.state.mostrarMas  === false//haciendo funcionalidad para ver mas o menos informacion sobre la descripcion de las tarjetas
                        ? <p onClick={() => this.masInformacion()}>Ver mas informacion</p> // me puedo hacer un if diciendo si mostras mas false y si si true
                        : <> <p onClick={() => this.menosInformacion()}>Ver menos informacion</p> 
                            <p>Nombre del artista: {this.props.topCanciones.artist.name}</p> 
                            <p>Posición en el TOP: {this.props.topCanciones.position}</p>
                            <button onClick={() => this.agregarysacarDeFav(this.props.topCanciones.id)}>Agregar Favoritos</button> 
                        </>
                    }
                
                </article>
            </React.Fragment>
        )
    }
}

export default TopMusica;