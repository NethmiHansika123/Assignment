import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import TodoReducer, {TodoFetch} from "./components/TodoSlice";
import { TodoApi } from './components/Todo.Api';

const store = configureStore({
  reducer:{

    todo: TodoReducer,
    [TodoApi.reducerPath]: TodoApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware().concat(TodoApi.middleware),
  
});
store.dispatch(TodoFetch());
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

