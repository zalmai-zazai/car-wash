import React from 'react';
import backgroundImg from '../img/carousel-3.jpg';
const Banner = () => {
  return (
    <div className="banner">
      <img src={backgroundImg} alt="" />
      <div className="banner-text">
        <h3>Mr. Sudsy Car Washing &amp; Fueling</h3>
        <h1>Get a Car Wash and Save 30¢/Gallon Instantly!</h1>

        <p>
          With Mr. Sudsy Save at the pump and get your car looking it's best!
        </p>
        <a className="btn btn-custom" href="">
          Explore More
        </a>
      </div>
      ;
    </div>
  );
};

export default Banner;
