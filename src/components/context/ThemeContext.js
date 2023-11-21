import React from "react";
// import { useReducer } from "react";

// function reducer(state, action) {
//   switch (action.type) {
//     case "changeTheme": {
//       return { theme: state.theme === "light" ? "dark" : "light" };
//     }
//   }
//   throw Error("Your codes are not working!" + action.type);
// }

// const initialState = { theme: "light" };

// const [state, dispatch] = useReducer(reducer, initialState);

const ThemeContext = React.createContext("");
export default ThemeContext;
