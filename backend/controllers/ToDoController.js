const Todo = require("../models/ToDoModel");

const AddTodo = async(req,res,next)=>{

   

    let todo = new Todo(req.body);
    todo.save()
            .then(todo=>{
                res.status(200).json({'Todo':'Todos are added successfully'});

            })
            .catch(err=>{
                res.status(400).send("Unable to save to database");
            });
}
const View = async(req,res,next)=>{

    //save data got from the client into the payment collection in the DB
    todo.find(function (err, Todo) {
        if (err) console.log(err);
        else {
          res.json(Todo);
        }
      });

    }
const DeleteDetails = async(req,res,next)=>{
      todo.deleteOne({ _id: req.params.id }, function (err, Todo) {
        if (err) res.json(err);
        else res.json('successfully Cancelled');
      });
  
  }   


exports.View=View;
exports.DeleteDetails=DeleteDetails;
exports.AddTodo=AddTodo;