import { FunctionComponent as FC } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./todo.scss";
import Button from "@mui/material/Button";
import Checkbox from '@mui/material/Checkbox';

const Form: FC = () => {
  const [name, setName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [todo, setTodo] = useState<any>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/todo/").then((res) => {
      const todo = res.data;
      setTodo(todo);
    });
  }, []);

  const handleSubmit = () => {
    const details = {
      name: name,
      date: date,
    };

    axios
      .post("http://localhost:5000/api/todo/add", details)
      .then((response) => {
        if (response.data.success) {
          alert("Successfully Added");
        } else {
          alert("Not Successfully Added");
        }
      });
  };

  const Delete = (id: string) => {
    axios
      .post("http://localhost:5000/api/todo/delete/" + id)
      .then((response) => {
        alert("successfully deleted");
      });
  };
  return (
    <div className="container">
      <h1>ToDo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          typeof="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Button variant="contained" onClick={() => handleSubmit()}>
          {" "}
          +{" "}
        </Button>
        
      </form>
      <div>
        {todo.map((Todo: { name: string; date: string }) => (
          <div>
            <Checkbox defaultChecked />
            <strong>
              <p> {Todo.name}</p>
            </strong>
            <strong>
              <p> {Todo.date}</p>
            </strong>
            <br />
            <Button variant="contained" onClick={() => Delete(todo._id)}>
              DELETE
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Form;
