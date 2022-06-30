import React,{ FunctionComponent as FC} from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Todoinsert } from "./TodoSlice";

const Form: FC = () =>{
    const [name,setName] = useState <string>("");
    const [date,setDate] = useState <string> ("");
    const dispatch = useDispatch();

    const handleSubmit = () => {
        const data = {
          name: name,
          date: date
        };
        dispatch( Todoinsert(data))
      };
    

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange = {(e) => setName(e.target.value)} />
            <input type="text" value={date} onChange = {(e) => setDate(e.target.value)}/>
            <button>
            {" "}
            Submit{" "}
          </button>
            </form> 
        </div>
    );
};
export default Form;