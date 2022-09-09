import React, { useReducer } from "react";

const Todo = (props) => {
  const { todo } = props;
  return (
    <div className="todo">
      {" "}
      <div className="todo-title">{todo.title}</div>
      <div
        className="todo-delete"
        onClick={() =>
          props.dispatch({ type: "DELETE", payload: { id: todo.id } })
        }
      >
        Delete
      </div>
    </div>
  );
};

export { Todo };
// import React from 'react';
// const Todo = () => {
//     return (
//         <></>
//     )
// }

// export { Todo }
