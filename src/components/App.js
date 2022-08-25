import React, { useReducer } from "react";
import { todoReducer } from "../reducers/todo";
import "../styles/App.css";
import { AddTodo } from "./AddTodo";
import { Todo } from "./Todo";
const App = () => {
  const [state, dispatch] = useReducer(todoReducer, { todo: [] });
  console.log(state);
  return (
    <div id="main">
      <AddTodo dispatch={dispatch} />
      {/* Render list of Todo Components here */}
      <ul>
        {state.todo.map((todo, key) => (
          <li key={`todo_key_${key}`}>
            <Todo todo={todo} dispatch={dispatch} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
