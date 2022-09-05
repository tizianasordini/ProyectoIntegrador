import React, {Component} from "react";
class Home extends Component {
    constructor(props){
        super(props)  
        
    }
    componentDidMount(){
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10')
        .then(response => response.json())
        .then(data => console.log("DATA",data))
        .catch(error => console.log('El error fue:'+ error))
    }
    

}

export default Home; 