import { FunctionComponent as FC} from "react";
import { useState } from "react";
import axios from "axios";
//import { useSelector } from "react-redux";
//import { useDispatch } from "react-redux";
import './todo.scss';
import Button from '@mui/material/Button';

const Form: FC = () =>{
    const [name,setName] = useState <string>("");
    const [date,setDate] = useState <string> ("");
    //const { todo, status} = useSelector(state => state.todo);
    //const dispatch = useDispatch();

    const handleSubmit = () => {
        const details = {
          name: name,
          date: date
        };
        // dispatch( Todoinsert())
        axios.post('http://localhost:5000/api/todo/add', details).then((response) => {
          if (response.data.success) {
            alert('Successfully Added');
          } else {
            alert('Not Successfully Added');
          }
        });
              
    
      };
    

    return(
      <div className="container">
        <h1>ToDo List</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange = {(e) => setName(e.target.value)} />
            <input type="date" typeof='Date' value={date} onChange = {(e) => setDate(e.target.value)}/>
            <Button variant="contained" onClick={() => handleSubmit()}>
            {" "}
            +{" "}
          </Button>
          </form> 
          <div>
          {/* {todo.map((TODO) => (
                  <div>
                  <strong><p> {TODO.name}</p></strong>
                  <strong><p> {TODO.date}</p></strong>
                
                    
                    <br></br>

                 
                      <button className="btn btn-danger" >Delete</button>
                   
                      </div>
                ))} */}
          </div>
        </div>
    
    );
};
export default Form;