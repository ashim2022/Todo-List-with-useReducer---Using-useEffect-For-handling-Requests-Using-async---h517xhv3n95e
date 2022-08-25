import React, { useState } from "react";

const AddTodo = ({ dispatch }) => {
  const [text, setText] = useState("");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "ADD", payload: {title:text,id:Date.now()} });
        }}
        id="todo-form"
      >
        <input
          type="text"
          id="todo-input"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export { AddTodo };

