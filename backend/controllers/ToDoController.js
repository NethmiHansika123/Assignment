const { Todo } = require("../models/ToDoModel");

const AddDetails = async (req, res, next) => {
  let todo = new Todo(req.body);
  await todo
    .save()
    .then((Todo) => {
      res.status(200).json({ todo: "Todo is added succesfully" });
    })
    .catch((err) => {
      res.status(400).send("unable to save database");
    });
};
const getDetails = async (req, res) => {
  await Todo.find(function (err, todo) {
    if (err) console.log(err);
    else {
      res.json(todo);  
    }
  });
};

const deleteDetails = async (req, res) => {
  await Todo.findByIdAndRemove(
    { _id: req.params.id },
    function (err, todo) {
      if (err) res.json(err);
      else res.json("successfully removed");
    }
  );
};

module.exports = {
  AddDetails,
  getDetails,
  deleteDetails,
};
