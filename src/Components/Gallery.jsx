import React from 'react';
import sudsy1 from '../img/sudsy1.jpg';
import sudsy2 from '../img/sudsy2.jpg';
import sudsy3 from '../img/sudsy3.jpg';
import sudsy4 from '../img/sudsy4.jpg';
const Gallery = () => {
  return (
    <div className="container gallery-display-list">
      <div className="gallery-item">
        <img className="gallery-item-image" src={sudsy1} alt="" />
      </div>
      <div className="gallery-item">
        <img className="gallery-item-image" src={sudsy2} alt="" />
      </div>
      <div className="gallery-item">
        <img className="gallery-item-image" src={sudsy3} alt="" />
      </div>
      <div className="gallery-item">
        <img className="gallery-item-image" src={sudsy4} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
