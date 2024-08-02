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
                <h3>Just a Wash</h3>
                <h2>
                  <span>$</span>
                  <strong>10</strong>
                  <span></span>
                </h2>
              </div>
              <div className="price-body">
                <ul>
                  <li>
                    <i className="far fa-check-circle"></i>Soft Touch Car Wash
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i>Blow Dry
                  </li>
                  <li>
                    <i className="far "></i>
                  </li>
                  <li>
                    <i className="far "></i>
                  </li>
                  <li>
                    <i className="far "></i>
                  </li>
                  <li>
                    <i className="far "></i>
                  </li>
                  <li>
                    <i className="far "></i>
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
                <h3>Deluxe Wash</h3>
                <h2>
                  <span>$</span>
                  <strong>13</strong>
                  <span></span>
                </h2>
              </div>
              <div className="price-body">
                <ul>
                  <li>
                    <i className="far fa-check-circle"></i>Special Wheel Clean
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i>Soft Touch Car Wash
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i>Wheel/Rocker Panel
                    Blaster
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i>Turtle Wax® Sealer
                    Wax
                  </li>

                  <li>
                    {/* <i className="far fa-times-circle"></i>Blow Dry Plus */}
                    <i className="far fa-check-circle"></i>Blow Dry Plus
                  </li>
                  <li>
                    <i className="far "></i>
                  </li>
                  <li>
                    <i className="far "></i>
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
                <h3>Works Wash</h3>
                <h2>
                  <span>$</span>
                  <strong>16</strong>
                  <span></span>
                </h2>
              </div>
              <div className="price-body">
                <ul>
                  <li>
                    <i className="far fa-check-circle"></i>Special Wheel Clean
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i>Soft Touch Car Wash
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i>Undercarriage Wash
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i>Wheel/Rocker Panel
                    Blaster
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i>Turtle Wax® Triple
                    Shine
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i>Turtle Wax® Sealer
                    Wax
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i>Blow Dry Plus
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
