import React from "react";
import style from "./Home.module.css";
import { useState, useEffect } from "react";
import images from "../../const";
import { Link } from "react-router-dom";
const Home = () => {
  const [currentState, setCurrentState] = useState(0);
  const [color, setColor] = useState(null);
  const bgImageStyle = {
    backgroundImage: `url(${images[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
    transition: "backgroundImage .2s",
  };
  const goToNext = (currentState) => {
    setCurrentState(currentState);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 3) {
        setCurrentState(0)
      } else {
        setCurrentState(currentState + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentState]);

  return (
    <div className={style.maincontent}>
      <div style={bgImageStyle}></div>
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
        <button className={style.btn}>
          <Link to="/signup">Join Us</Link>
        </button>
      </div>
      <div className={style.crousel}>
        {images.map((image, currentState) => (
          <span
            key={currentState}
            style={{ backgroundColor: color }}
            onClick={() => goToNext(currentState)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Home;
