import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todo: [],
  status: null,
};

export const TodoFetch = createAsyncThunk("todo/TodoFetch", async () => {
  const response = await axios.get("http://localhost:5000/todo");
  return response?.data;
});

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: {
    [TodoFetch.fulfilled.toString()]: (state, action) => {
      state.todo = action.payload;
    },
  },
});

export default todoSlice.reducer;
