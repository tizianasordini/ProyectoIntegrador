import React, {Component} from "react";

/* import Tarjetas from '../../components/tarjetas /tarjetas*/
class Home extends Component {
    constructor(props){
        super(props)  
        this.state ={}
    }
    componentDidMount(){
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10')
        .then(response => response.json()) //parciamos a json
        .then(data => console.log("DATA",data))
        .catch(error => console.log('El error fue:'+ error))
    }
    
    //agregar render

}

export default Home; 