import React from 'react';
import sudsy1 from '../img/sudsy1.jpg';
import sudsy2 from '../img/sudsy2.jpg';
import sudsy3 from '../img/sudsy3.jpg';
import sudsy4 from '../img/sudsy4.jpg';
import carWashVideo from '../img/carwash.mp4';
const Gallery = () => {
  return (
    <div className="gallery">
      <div className="video-container">
        <video autoPlay src={carWashVideo} controls></video>
      </div>
      <div className="gallery-display-list row ">
        <div className="gallery-item col-md-6 mb-3">
          <img className="gallery-item-image img-fluid" src={sudsy1} alt="" />
        </div>
        <div className="gallery-item col-md-6 mb-3 ">
          <img className="gallery-item-image img-fluid" src={sudsy2} alt="" />
        </div>
        <div className="gallery-item col-md-6 mb-3">
          <img className="gallery-item-image img-fluid" src={sudsy3} alt="" />
        </div>
        <div className="gallery-item col-md-6 mb-3">
          <img className="gallery-item-image img-fluid" src={sudsy4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
