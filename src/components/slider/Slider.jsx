import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./slider.css";
const Slider = () => {
  return (
   
    <Carousel width="80%">
    <div>
        <img src="/images/3.jpg" />
        <p className="legend">Slide 1</p>
      </div>
      <div>
        <img src="/images/2.jpg" />
        <p className="legend">Slide 2</p>
      </div>
      <div>
        <img src="/images/3.jpg" />
        <p className="legend">Slide 3</p>
      </div>
    </Carousel>
   
  );
};

export default Slider;
