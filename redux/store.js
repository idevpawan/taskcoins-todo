import { createStore } from "redux";

// Define an initial state for the store
const initialState = {
  address: null,
  todos: [],
  selectedDate: null, // Add selectedDate property
};

// Define a reducer to handle state updates
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ADDRESS":
      return {
        ...state,
        address: action.payload,
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TODO":
      const updatedTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        todos: updatedTodos,
      };
    case "SET_SELECTED_DATE": // Add case for setting selectedDate
      return {
        ...state,
        selectedDate: action.payload,
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer);

export default store;
