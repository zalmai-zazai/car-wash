import React from 'react';
import carousel1 from '../img/carousel-1.jpg';
import carousel2 from '../img/carousel-2.jpg';
import carousel3 from '../img/carousel-3.jpg';
const Carousel = () => {
  return (
    // <div className="carousel">
    //   <div className="container-fluid">
    //     <div className="owl-carousel">
    //       <div className="carousel-item">
    //         <div className="carousel-img">
    //           <img src={carousel1} alt="Image" />
    //         </div>
    //         <div className="carousel-text">
    //           <h3>Washing & Detailing</h3>
    //           <h1>Keep your Car Newer</h1>
    //           <p>
    //             Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris.
    //             Vivamus egestas eleifend dui ac
    //           </p>
    //           <a className="btn btn-custom" href="">
    //             Explore More
    //           </a>
    //         </div>
    //       </div>
    //       <div className="carousel-item">
    //         <div className="carousel-img">
    //           <img src="img/carousel-2.jpg" alt="Image" />
    //         </div>
    //         <div className="carousel-text">
    //           <h3>Washing & Detailing</h3>
    //           <h1>Quality service for you</h1>
    //           <p>
    //             Morbi sagittis turpis id suscipit feugiat. Suspendisse eu augue
    //             urna. Morbi sagittis orci sodales
    //           </p>
    //           <a className="btn btn-custom" href="">
    //             Explore More
    //           </a>
    //         </div>
    //       </div>
    //       <div className="carousel-item">
    //         <div className="carousel-img">
    //           <img src="img/carousel-3.jpg" alt="Image" />
    //         </div>
    //         <div className="carousel-text">
    //           <h3>Washing & Detailing</h3>
    //           <h1>Exterior & Interior Washing</h1>
    //           <p>
    //             Sed ultrices, est eget feugiat accumsan, dui nibh egestas
    //             tortor, ut rhoncus nibh ligula euismod quam
    //           </p>
    //           <a className="btn btn-custom" href="">
    //             Explore More
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={carousel1} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={carousel2} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={carousel3} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
