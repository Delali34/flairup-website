import React from "react";
import instagram from "../asset/instagram.webp";
import logo from "../asset/logos1.webp";
import { FiInstagram } from "react-icons/fi";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="contactUs">
          <img src={logo} alt="" id="whatsapp" />
          <h1 className="contacttext">Contact Us</h1>
          <div className="whatsapp">
            <h1 className="contact">+233 20 431 4170 / +233 59 833 6480</h1>
            <h1 className="contact">Email : flairup07@gmail.com</h1>
          </div>
        </div>
        <div className="followUs">
          <h1 className="gramtext">Follow Us</h1>
          <div className="Gram">
            <FiInstagram color="white" size="2em" />
            <h1 className="flair">flairup</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
