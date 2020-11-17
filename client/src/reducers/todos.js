import { GET_TODOS, ADD_TODO, DELETE_TODO } from '../actions/types'; 

const initialState = {
    todos: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_TODOS: 
        // console.log(action.type, 'action.type');
        console.log(action.payload, 'action.payload');
            return {
                ...state, 
                todos: action.payload
            }
        case ADD_TODO: 
            return {
                ...state, 
                todos: action.payload
            }
        case DELETE_TODO: 
            return {
                ...state, 
                todos: state.todos.filter(todo => {
                    return todo.text !== action.payload
                })
            }    
        default: 
            return state    
    }
}

