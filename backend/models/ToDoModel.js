const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema =  mongoose.Schema({
    name : {
        type:String
    },
    date : {
        type:String
    },

},{timesamps:true})

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {Todo}