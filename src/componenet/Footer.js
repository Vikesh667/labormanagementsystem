import React from "react";
import style from "./Footer.module.css";
import {BiLogoGithub, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter} from "react-icons/bi"
export const Footer = () => {
  return (
    <footer className={style.Footer}>
      <div className={style.container}>
        <div className={style.footercontent}>
          <ul className={style.footerlinks}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div className={style.footercontent}>
          <ul className={style.footerlinks}>
            <li>
              <a href="#about"><BiLogoLinkedin/></a>
            </li>
            <li>
              <a href="#contact"><BiLogoInstagram/></a>
            </li>
            <li>
              <a href="#privacy"><BiLogoGithub/></a>
            </li>
            <li>
              <a href="#terms"><BiLogoTwitter/></a>
            </li>
          </ul>
        </div>
      </div>
      <p>© 2023 Labor Management System. All rights reserved.</p>
    </footer>
  );
};
