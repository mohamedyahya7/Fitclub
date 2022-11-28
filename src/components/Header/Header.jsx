import React, { useState } from "react";
import logo from "../../assets/logo.png";
import bars from "../../assets/bars.png";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='header'>
      <img className='logo' src={logo} alt='' />
      {menuOpen===false && mobile ? (
        <div
          style={{
            borderRadius: "5px",
            padding: ".5rem",
            backgroundColor: "var(--appColor)",
          }}>
          <img
            style={{ width: "1.5rem", height: "1.5rem" }}
            onClick={() => {
              setMenuOpen(true)}}
            src={bars}
            alt=''
          />
        </div>
      ) : (
        <ul className='header-menu'>
          <li>
            <Link onClick={() => setMenuOpen(false)}  activeClass="active" to="home" spy={true} smooth={true}>
            Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpen(false)} to='programs' spy={true} smooth={true}>
            Programs
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpen(false)} to='reasons' spy={true} smooth={true}>
            Why us
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpen(false)} to='join-us' spy={true} smooth={true}>
            join-us
            </Link>
          </li>
          <li >
            <Link onClick={() => setMenuOpen(false)} to='testimonials' spy={true} smooth={true}>
            Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
