import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios  from "axios";

const initialState = {
    todo: [],
    status: null,
};

export const Todoinsert = createAsyncThunk<any>(
    "todo/Todoinsert",
    async () => {
       const response = await axios.post('http://localhost:3000/todo/add')
       return response?.data
    }
)


const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        Todoinsert(state,action){
            state.todo.push(action.payload);
        },
    },
    extraReducers: {
        // [Todoinsert.fulfilled]: (state,action) => {
        //     state.todo = action.payload
        // }
    }
 
});

export default todoSlice.reducer;