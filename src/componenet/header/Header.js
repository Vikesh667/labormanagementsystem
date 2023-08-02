import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menuBar = () => {
    setToggle(!toggle);
  };
  return (
    <nav className={style.nav}>
      <div className={style.logo}>
        <h2>LMS</h2>
      </div>
      <div className={style.desktop}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <Link to="#services">Services</Link>
          </li>
        </ul>
        <button className={style.button}>
          <Link to="/signup">Join Us</Link>
        </button>
      </div>
      {toggle && (
        <div className={style.mobile}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <Link to="/signup">JoinUs</Link>
            </li>
            <li>
              <Link to="profile">Profile</Link>
            </li>
          </ul>
          <button className={style.button}>
          <Link to="/signup">Join Us</Link>
        </button>
        </div>
      )}
      <button onClick={menuBar} className={style.btn}>
        <GiHamburgerMenu />
      </button>
    </nav>
  );
};

export default Header;
