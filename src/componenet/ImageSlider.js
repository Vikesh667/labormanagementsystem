import React from "react";
import Slider from "react-slick";
import style from "./ImageSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={style.slidercontainer}>
      <Slider {...settings} >
        <div>
          <img
            src="https://images.unsplash.com/photo-1559175607-aff9d008ffa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
            alt="Image 1"
          />
        </div>
        <div >
          <img
            src="https://images.unsplash.com/photo-1591260315238-79ee54d55fc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=867&q=80"
            alt="Image 2"
          />
        </div>
        <div >
          <img
            src="https://images.unsplash.com/photo-1535090467336-9501f96eef89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80"
            alt="Image 3"
          />
        </div>
        {/* Add more images here */}
      </Slider>
    </div>
  );
};

export default ImageSlider;
