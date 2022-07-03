import { FunctionComponent as FC } from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import "./todo.scss";
import Button from "@mui/material/Button";

const Form: FC = () => {
  const [name, setName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [todo, setTodo] = useState<any>([])

 
  useEffect(() => {
   
    axios
      .get('http://localhost:5000/api/todo/')
      .then((res) => {
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
        {todo.map((Todo: { name: string; date: string; }) => (
                  <div>
                  <strong><p> {Todo.name}</p></strong>
                  <strong><p> {Todo.date}</p></strong>
                
                    
                    <br></br>

                 
                      <button className="btn btn-danger" >Delete</button>
                   
                      </div>
                ))}
      </div>
    </div>
  );
};
export default Form;
