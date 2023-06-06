import { createStore } from "redux";

// Define an initial state for the store
const initialState = {
  address: null,
};

// Define a reducer to handle state updates
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ADDRESS":
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer);

export default store;
