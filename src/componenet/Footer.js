import React from "react";
import style from "./Footer.module.css";
import {BiLogoFacebook, BiLogoGithub, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter} from "react-icons/bi"
export const Footer = () => {
  return (
    <footer className={style.container}>
       <div className={style.footer}>
           <div className={style.row}>
            <div className={style.footercol}>
              <h4>company</h4>
              <ul>
                <li> <a href="#">about us</a> </li>
                <li> <a href="#">our services </a></li>
                <li> <a href="#"> privecy</a> </li>
                <li> <a href="#">affiliated program</a> </li>
             </ul>
            </div>
            <div className={style.footercol}>
              <h4>get help</h4>
              <ul>
                <li> <a href="#">FAQ</a> </li>
                <li> <a href="#">Community Forum or User Group</a> </li>
                <li> <a href="#">Live Chat</a> </li>
                <li> <a href="#">Feedback or Suggestions</a> </li>
             </ul>
            </div>
            <div className={style.footercol}>
              <h4>follow us</h4>
              <div className={style.social}>
                <a href="#"><BiLogoFacebook/></a> 
                <a href="#"><BiLogoGithub/></a>
                <a href="#"><BiLogoInstagram/></a> 
                <a href="#"><BiLogoLinkedin/></a> 
                <a href="#"><BiLogoTwitter/></a> 
             </div>
            </div>
           </div>
       </div>
    </footer>
  );
};
