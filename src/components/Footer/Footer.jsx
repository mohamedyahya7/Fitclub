import React from "react";
import "./Footer.css";
import gh from "../../assets/github.png";
import ins from "../../assets/instagram.png";
import lin from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className='Footer-container'>
      <hr />
      <div className='footer'>
        <div className='social-links'>
          <img src={gh} alt='' />
          <img src={lin} alt='' />
          <img src={ins} alt='' />
        </div>
        <div className='logo-f'>
          <img src={logo} alt='' />
        </div>
      </div>
      <div className='blur b-f-1'></div>
      <div className='blur b-f-2'></div>
    </div>
  );
};

export default Footer;
