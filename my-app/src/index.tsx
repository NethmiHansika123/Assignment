import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import TodoReducer, {Todoinsert} from "./components/TodoSlice";

const store = configureStore({
  reducer:{

    todo: TodoReducer,
  },
});
store.dispatch(Todoinsert());
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
