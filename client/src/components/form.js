import React, { Component } from 'react';
import { Button, Container, FormControl, FormGroup, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Form extends Component {
    state = {
        todos: [], 
        todo: {
            id: 0, 
            text: ''
        }
    }
    handleChange = (e) => {
        console.log(e.target.value, 'val');
       this.setState({
           todo :{
            id: this.state.todo.id +1,
            text:  e.target.value
           }
           
       })
       
    }
    handleClick = (e) => {
        e.preventDefault();
        // console.log(this.state, '9999');
        this.state.todos.push(this.state.todo)
        // console.log('hiiiiii66666669999');
        this.setState({
            todo: {
                text: ''
            }
        })
    }
    handleSpanClick = (e) => {
        console.log(e.target.innerHTML, 'llll');
        for(var i=0; i<this.state.todos.length; i++){
            // console.log(this.state.todos[i].text, 'his.state.todos[i].text');
           
            // console.log(e.target.innerHTML, 'e.target.innerHTML');
            // console.log(this.state.todos[i].text === e.target.innerHTML);
            if(this.state.todos[i].text === e.target.innerHTML){
                console.log(this.state.todos[i], 'this.state.todos[i]');
         
                const cut = this.state.todos.splice(this.state.todos[i], 1); 
                console.log(cut, 'cut');
                console.log(this.state.todos, 'this.state.todos');
                // console.log(this.state.todos, '99999');
            }
           
            // console.log(this.state.todos, '3333');

        }

        console.log(this.state.todos, 'todos5555');

        this.setState({
            todos: this.state.todos
        })
        // console.log(this.state.todos, 'kkkkkk');
        
        // this.state.todos.map(todo => {
        //     if(this.state.todos.indexOf(todo) !== -1){
        //         return this.state.todos.slice(todo)
        //     }
        // })
    }
    render(){
        console.log(this.state, 'state');
        console.log(this.state.todos, 'todos');
        return (
            <Container className="mt-4">

            <div>
            <FormGroup>
                <FormControl type="text" placeholder="Enter a todo" name='todo' value={this.state.todo.text} onChange={this.handleChange.bind(this)} className="m-4 mr-0 p-4" style={{display: 'inline-block', width: '75%'}}>

                </FormControl>
                <Button variant='primary' onClick={this.handleClick.bind(this)} style={{display: 'inline-block', height: '51px', width:'9%'}} className="p-2">Add</Button>
               
            </FormGroup>
            <div>
                <ListGroup>
                    {this.state.todos.map((todo) => (
                        <ListGroup.Item className="mt-4" onClick={this.handleSpanClick.bind(this)} style={{'border-top': '1px solid #e4e4e4'}}>{todo.text}</ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
           
            </div>
            </Container>
        )
       
    }
}

export default Form;