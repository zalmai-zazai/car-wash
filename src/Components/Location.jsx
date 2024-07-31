import React from 'react';

const Location = () => {
  return (
    <div className="location" id="location">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="section-header text-left">
              <p>Washing Points</p>
              <h2>Car Washing & Care Points</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="location-item">
                  <i className="fa fa-map-marker-alt"></i>
                  <div className="location-text">
                    <h3>Car Washing Point</h3>
                    <p>123 Street, New York, USA</p>
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
                    <h3>Car Washing Point</h3>
                    <p>123 Street, New York, USA</p>
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
                    <h3>Car Washing Point</h3>
                    <p>123 Street, New York, USA</p>
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
                    <h3>Car Washing Point</h3>
                    <p>123 Street, New York, USA</p>
                    <p>
                      <strong>Call:</strong>+012 345 6789
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="location-form">
              <h3>Request for a car wash</h3>
              <form>
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    required="required"
                  />
                </div>
                <div className="control-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    required="required"
                  />
                </div>
                <div className="control-group">
                  <textarea
                    className="form-control"
                    placeholder="Description"
                    required="required"
                  ></textarea>
                </div>
                <div>
                  <button className="btn btn-custom" type="submit">
                    Send Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
