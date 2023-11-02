import React from "react";
import "./header.scss";
import connection from "../../icons/Cellular Connection.png";
import wifi from "../../icons/Wifi.png";
import battery from "../../icons/Battery.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import img1 from "../../images/Ellipse 6.png";
import img2 from "../../images/Ellipse 7.png";
import img3 from "../../images/Ellipse 8.png";
import img4 from "../../images/Ellipse 9.png";
import imgMini from "../../images/Group 21.png";

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
          <div className="avatar">
            <img src={img1} alt="" />
            <img src={imgMini} alt="" id="imgMini" />
          </div>
          <div className="text">
            <h5>My status</h5>
          </div>
        </div>

        <div className="box">
          <div className="avatar">
            <img src={img2} alt="" />
          </div>
          <div className="text">
            <h5>Digital Ghumti</h5>
          </div>
        </div>

        <div className="box">
          <div className="avatar" id="green1">
            <img src={img3} alt="" />
          </div>
          <div className="text">
            <h5>Cinemaghar App</h5>
          </div>
        </div>

        <div className="box">
          <div className="avatar" id="green2">
            <img src={img4} alt="" />
          </div>
          <div className="text">
            <h5>Abhishek Dai</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
