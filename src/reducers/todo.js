const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return { ...state, todo: [...state.todo, action.payload] };
      break;
    }
    case "DELETE": {
      return {
        ...state,
        todo: state.todo.filter((item, id) => item.id !== action.payload.id),
      };
    }
  }
};

export { todoReducer };
