import { FunctionComponent as FC } from "react";
import { useState } from "react";
//import { useSelector } from "react-redux";
import axios from "axios";
import "./todo.scss";
import {useGetAllTodoQuery} from './Todo.Api';
import Button from "@mui/material/Button";
import Checkbox from '@mui/material/Checkbox';

const Form: FC = () => {
  
  //const {todo, status} = useSelector(state => state.todo)
  const {data} = useGetAllTodoQuery({static: true});
  const [name, setName] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const handleSubmit = () => {
    const details = {
      name: name,
      date: date,
    };

    axios
      .post("http://localhost:5000/todo/add", details)
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
      .post("http://localhost:5000/todo/delete/" + id)
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
        {data?.map((todo: { name: string; date: string }) => (
          <div>
            <Checkbox defaultChecked />
            <strong>
              <p> {todo.name}</p>
            </strong>
            <strong>
              <p> {todo.date}</p>
            </strong>
            <br />
            <Button variant="contained" onClick={() => Delete(data._id)}>
              DELETE
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Form;
