import React from "react";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.aboutuscontainer}>
      <div className={style.heading}>
        <h1>About US</h1>
      </div>
      <div className={style.container}>
        <div className={style.contenet}>
          <h2>Welcome To Our Website</h2>
          <p>
            Welcome to our Labor Management System! We are a dedicated team of
            professionals passionate about optimizing workforce management and
            streamlining labor processes for businesses across various
            industries.
          </p>
          <button className={style.btn}>Learn More</button>
        </div>
        <div className={style.images}>
          <img src="https://t3.ftcdn.net/jpg/05/82/81/52/240_F_582815230_nwRKXbisW0R5XiNAoJXBfYJJdV7Ms7O3.jpg" />
        </div>
      </div>
      <div className={style.container2}>
        <div className={style.contenet}>
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower organizations to manage their workforce
            efficiently and maximize productivity through our innovative Labor
            Management System. We strive to provide a comprehensive solution
            that caters to the unique needs of each client.
          </p>
          <button className={style.btn}>Learn More</button>
        </div>
        <div className={style.images}>
          <img src="https://t3.ftcdn.net/jpg/05/82/81/52/240_F_582815230_nwRKXbisW0R5XiNAoJXBfYJJdV7Ms7O3.jpg" />
        </div>
      </div>
    </div>
  );
};

export default About;
