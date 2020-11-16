const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    text: {
        type: String, 
        required: true
    }, 
    id: {
        type: Number
    } 
})

module.exports = Todo = mongoose.model('todo', TodoSchema)