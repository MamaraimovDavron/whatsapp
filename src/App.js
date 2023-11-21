/* eslint-disable default-case */
import "./App.scss";
import Main from "./components/Main/Main";
// import { useState } from "react";
// import { useContext } from "react";
import ThemeContext from "./components/context/ThemeContext";
// import { useCallback } from "react";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "changeTheme": {
      return { theme: state.theme === "light" ? "dark" : "light" };
    }
  }
  throw Error("Your codes are not working!" + action.type);
}

const initialState = { theme: "light" };

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [theme, setHeaderTheme] = useState("light");

  // const theme = useContext(ThemeContext);

  // const handleClick = useCallback(() => {
  //   setHeaderTheme(theme === "light" ? "dark" : "light");
  // });

  const handleClick = () => {
    dispatch({ type: "changeTheme" });
  };

  // console.log(theme.body);

  // console.log(headerTheme);
  // console.log(headerTheme, "this is theme");

  return (
    <ThemeContext.Provider value={state.theme}>
      <div className="container" onClick={handleClick}>
        <Main />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
