import { useContext } from "react";
import React from "react";
import ThemeContext from "../context/ThemeContext";
import "./middle.scss";

const Middle = (props) => {
  const theme = useContext(ThemeContext);

  return (
    <div className="middle">
      <div className={`${theme === "light" ? "dark" : "light"}`}>
        <div className="img-box">
          <img src={props.imgUrl} />
        </div>
        <div className="info-box">
          <div className="nameTime">
            <h3>{props.name}</h3>
            <h5>{props.date}</h5>
          </div>
          <div className="tickText">
            <a href="!#">
              <i class="bi bi-check2-all"></i>
            </a>
            <h5>{props.message}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
