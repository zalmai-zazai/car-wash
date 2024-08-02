import React from 'react';
import aboutImage from '../img/about.jpg';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img">
              <img src={aboutImage} alt="Image" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-header text-left">
              <p>About Us</p>
              <h2>car washing and Fueling Station</h2>
            </div>
            <div className="about-content">
              <p>
                Save at the pump and get your car looking it's best! Mr. SUDSY'S
                CAR WASH is a professional, family-owned wash and fueling
                station with only one goal, give our customers the
                highest-quality washes and cleanest cars in Kent, Washington.
                Our touchless washes, complimentary shine toweles, and friendly
                staff are just the start.
              </p>
              <ul>
                <li>
                  <i className="far fa-check-circle"></i>Seats washing
                </li>
                <li>
                  <i className="far fa-check-circle"></i>Vacuum cleaning
                </li>
                <li>
                  <i className="far fa-check-circle"></i>Interior wet cleaning
                </li>
                <li>
                  <i className="far fa-check-circle"></i>Window wiping
                </li>
              </ul>
              <a className="btn btn-custom" href="">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
