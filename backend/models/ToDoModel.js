const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TodoSchema = new Schema({


    name : {

        type : String
    },

    date : {

        type : Date
    }


},{
    timestamps:true
});

const Todo = mongoose.model('Todo',TodoSchema);
module.exports ={Todo}