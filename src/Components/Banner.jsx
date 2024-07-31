import React from 'react';
import backgroundImg from '../img/carousel-3.jpg';
const Banner = () => {
  return (
    <div className="banner">
      <img src={backgroundImg} alt="" />
      <div className="banner-text">
        <h3>Washing &amp; Detailing</h3>
        <h1>Quality service for you</h1>

        <p>
          Morbi sagittis turpis id suscipit feugiat. Suspendisse eu augue urna.
          Morbi sagittis orci sodales
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
