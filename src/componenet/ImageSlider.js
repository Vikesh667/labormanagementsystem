import React, { useState, useEffect } from 'react';
import images from '../data';
import style from "./ImageSlider.module.css"
const Back = () => {
  const [currentState, setCurrentState] = useState(0);
  console.log(images[0].url);
  const bgImageStyle = {
    backgroundImage: `url(${images[currentState].url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100%',
    Transition: 'backgroundImage .2s',
  };
  const goToNext = (currentState) => {
    setCurrentState(currentState);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 3) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [currentState]);
  return (
    <div className={style.containers}>
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
        {/* <button className={st.btn} onClick={handleClick}>
          <Link to="/signup">Join Us</Link>
        </button> */}
      </div>
      <div className="crousel-boult">
        {images.map((image, currentState) => (
          <span
            key={currentState}
            onClick={() => goToNext(currentState)}
          ></span>
        ))}
      </div>
    </div>
  );
};
export default Back;