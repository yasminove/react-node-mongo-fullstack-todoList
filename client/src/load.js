import React, { Component } from 'react'; 
import axios from 'axios'; 

class Load extends Component {
    
    componentDidMount(){
        axios.get('http://localhost:4000') 
        .then((res) => console.log(res))
        .catch(err => console.log(err, 'err'))
    }
    render(){
        return (
            <h1>hey</h1>
        )
    }
}

export default Load;