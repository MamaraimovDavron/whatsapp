import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="btns">
        <div className="footerIcons">
          <a href="!#" className="first">
            <i class="bi bi-chat-left-text"></i>
          </a>
          <a href="!#" className="second">
            Chats
          </a>
        </div>
      </div>

      <div className="btns">
        <div className="footerIcons">
          <a href="!#" className="first">
            <i class="bi bi-telephone-fill"></i>
          </a>
          <a href="!#" className="second">
            Calls
          </a>
        </div>
      </div>

      <div className="btns">
        <div className="footerIcons">
          <a href="!#" className="first">
            <i class="bi bi-person-lines-fill"></i>
          </a>
          <a href="!#" className="second">
            Contacts
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
