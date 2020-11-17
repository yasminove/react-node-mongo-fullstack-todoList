import axios from 'axios'; 

import { GET_TODOS, ADD_TODO, DELETE_TODO } from './types'; 

export const getTodos = () => (dispatch) => {
    axios.get('http://localhost:4000/')
        .then(res => {
            console.log(res, 'res here');
            dispatch({
                type: GET_TODOS, 
                payload: res.data
            })
        })
        .catch(err => console.log('Err in getting todos' ,err))
}

export const addTodo = (todo) => (dispatch) => {
    axios.post('http://localhost:4000/todo/add', todo)
        .then(res => {
            dispatch({
                type: ADD_TODO, 
                payload: res.data
            })
        })
        .catch(err => console.log('Err', err))
}

export const deleteTodo = (text) => (dispatch) => {
    axios.delete(`http://localhost:4000/todo/delete/${text}`)
        .then(res => {
            dispatch({
                type: DELETE_TODO, 
                payload: text
            })
        })
        .catch(err => console.log('Err', err))
}