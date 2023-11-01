import React from "react";
import "./header.scss";
import connection from "../../icons/Cellular Connection.png";
import wifi from "../../icons/Wifi.png";
import battery from "../../icons/Battery.png";
import "bootstrap-icons/font/bootstrap-icons.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-app">
        <div className="time">
          <h4>9:41</h4>
        </div>
        <div className="icons">
          <img src={connection} alt="" />
          <img src={wifi} alt="" />
          <img src={battery} alt="" />
        </div>
      </div>
      <div className="body-app">
        <div className="text">
          <h1>WhatsApp</h1>
        </div>
        <div className="search-box">
          <a href="!#">
            <i class="bi bi-search"></i>
          </a>
          <a href="!#">
            <i class="bi bi-three-dots-vertical"></i>
          </a>
        </div>
      </div>
      <div className="footer-app">
        <div className="box">
          <div className="textImg">
            <img src="" alt="" />
            <h5>My Status</h5>
            <span>{/* <img src="" alt="" /> */}</span>
          </div>
        </div>
        <div className="box">
          <div className="textImg">
            <img src="" alt="" />
            <h5>Digital Ghumti</h5>
          </div>
        </div>
        <div className="box">
          <div className="textImg">
            <img src="" alt="" />
            <h5>Cinemaghar App</h5>
          </div>
        </div>
        <div className="box">
          <div className="textImg">
            <img src="" alt="" />
            <h5>Abhishek Dai</h5>
          </div>
        </div>
        <div className="box">
          <div className="textImg">
            <img src="" alt="" />
            <h5>Sagar Dai</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
