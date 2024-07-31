import React from 'react';

const Price = () => {
  return (
    <div className="price" id="price">
      <div className="container">
        <div className="section-header text-center">
          <p>Washing Plan</p>
          <h2>Choose Your Plan</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="price-item">
              <div className="price-header">
                <h3>Basic Cleaning</h3>
                <h2>
                  <span>$</span>
                  <strong>25</strong>
                  <span>.99</span>
                </h2>
              </div>
              <div className="price-body">
                <ul>
                  <li>
                    <i className="far fa-check-circle"></i>Seats Washing
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i>Vacuum Cleaning
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i>Exterior Cleaning
                  </li>
                  <li>
                    <i className="far fa-times-circle"></i>Interior Wet Cleaning
                  </li>
                  <li>
                    <i className="far fa-times-circle"></i>Window Wiping
                  </li>
                </ul>
              </div>
              <div className="price-footer">
                <a className="btn btn-custom" href="">
                  Book Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="price-item featured-item">
              <div className="price-header">
                <h3>Premium Cleaning</h3>
                <h2>
                  <span>$</span>
                  <strong>35</strong>
                  <span>.99</span>
                </h2>
              </div>
              <div className="price-body">
                <ul>
                  <li>
                    <i className="far fa-check-circle"></i>Seats Washing
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i>Vacuum Cleaning
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i>Exterior Cleaning
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i>Interior Wet Cleaning
                  </li>
                  <li>
                    <i className="far fa-times-circle"></i>Window Wiping
                  </li>
                </ul>
              </div>
              <div className="price-footer">
                <a className="btn btn-custom" href="">
                  Book Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="price-item">
              <div className="price-header">
                <h3>Complex Cleaning</h3>
                <h2>
                  <span>$</span>
                  <strong>49</strong>
                  <span>.99</span>
                </h2>
              </div>
              <div className="price-body">
                <ul>
                  <li>
                    <i className="far fa-check-circle"></i>Seats Washing
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i>Vacuum Cleaning
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i>Exterior Cleaning
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i>Interior Wet Cleaning
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i>Window Wiping
                  </li>
                </ul>
              </div>
              <div className="price-footer">
                <a className="btn btn-custom" href="">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
