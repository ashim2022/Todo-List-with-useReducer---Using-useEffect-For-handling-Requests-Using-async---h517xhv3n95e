import React, { useState } from "react";

const AddTodo = ({ dispatch }) => {
  const [text, setText] = useState("");

  return (
    <>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={() => dispatch({ type: "ADD", payload: text })}>
        Add
      </button>
    </>
  );
};

export { AddTodo };

// import React from "react"

// const AddTodo = ({ dispatch }) => {


//     return (
//         <>
//         <input value={inputValue} onChange={handleOnChange}/>
//         </>
//     )
// }

// export { AddTodo }