import "./App.scss";
import Main from "./components/Main/Main";
import { useState } from "react";
// import { useContext } from "react";
import ThemeContext from "./components/context/ThemeContext";
import { useCallback } from "react";

const App = () => {
  const [theme, setHeaderTheme] = useState({
    header: "light",
    body: "light",
  });
  // const theme = useContext(ThemeContext);

  const handleClick = useCallback(() => {
    setHeaderTheme(theme === "light" ? "dark" : "light");
  });

  console.log(theme.body);

  // console.log(headerTheme);
  // console.log(headerTheme, "this is theme");

  return (
    <ThemeContext.Provider value={theme}>
      <div className="container" onClick={handleClick}>
        <Main />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
