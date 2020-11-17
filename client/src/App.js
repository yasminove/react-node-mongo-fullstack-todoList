import logo from './logo.svg';
import './App.css';
import Form from './components/form'; 
import React, { Component } from 'react'
import store from './store.js'; 
import { Provider } from 'react-redux'; 


class App extends Component {
  componentDidMount(){
    console.log('hiiii');
  }
  render(){
    return (
    
    
      <Provider store={store}>
      <Form/>
      </Provider>


  );
  }
  
}

export default App;
