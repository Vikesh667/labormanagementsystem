import React from "react";
import style from "./Home.module.css";
import ImageSlider from "../ImageSlider";
import { useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow(!show);
  };
  return (
      <div className={style.maincontent} >
            
         <div className={style.container}>      
          <h1>Welcome to the Labor Management System</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            interdum euismod dui, at fermentum metus ultricies at. Suspendisse
            potenti. Quisque fringilla velit et felis luctus interdum. Sed
            suscipit feugiat justo, sit amet tincidunt elit vulputate sit amet.
          </p>
          <p>
            Vestibulum a consectetur elit. Etiam nec blandit dui, nec euismod
            nisi. Praesent eu lorem vitae risus pharetra sagittis. Sed
            sollicitudin, elit at ullamcorper lacinia, mi neque facilisis enim,
            sit amet auctor odio nunc a felis.
          </p>
          <button className={style.btn} onClick={handleClick}>
            <Link to="/signup">Join Us</Link>
          </button>
        </div>
      </div>

  );
};

export default Home;
