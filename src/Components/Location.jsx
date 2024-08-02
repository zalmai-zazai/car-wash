import React from 'react';
import fuel from '../img/fuel.png';

const Location = () => {
  return (
    <div className="location" id="location">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="section-header text-left">
              <p>Washing Points</p>
              <h2>Sudsy Washing & Fueling Points</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="location-item">
                  <i className="fa fa-map-marker-alt"></i>
                  <div className="location-text">
                    <h3>Kent, WA</h3>
                    <p>209 Central Ave S, Kent, WA 98032</p>
                    <p>
                      <strong>Call:</strong>+1253-520-4110
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="location-item">
                  <i className="fa fa-map-marker-alt"></i>
                  <div className="location-text">
                    <h3>Seattle, WA</h3>
                    <p>James Street, Seattle, WA</p>
                    <p>
                      <strong>Call:</strong>+012 345 6789
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="location-item">
                  <i className="fa fa-map-marker-alt"></i>
                  <div className="location-text">
                    <h3>Tacoma, WA</h3>
                    <p>5th Street, Tacoma, WA</p>
                    <p>
                      <strong>Call:</strong>+012 345 6789
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="location-item">
                  <i className="fa fa-map-marker-alt"></i>
                  <div className="location-text">
                    <h3>Belluve, WA</h3>
                    <p>5th Ave 3rd Street, Belluve, WA</p>
                    <p>
                      <strong>Call:</strong>+012 345 6789
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <h4>Save 30¢/gallon with Every Wash</h4>
            <img src={fuel} alt="" style={{ width: '400px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
