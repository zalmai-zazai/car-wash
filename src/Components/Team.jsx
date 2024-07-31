import React from 'react';
import team1 from '../img/team-1.jpg';
import team2 from '../img/team-2.jpg';
import team3 from '../img/team-3.jpg';
import team4 from '../img/team-4.jpg';

const Team = () => {
  return (
    <div className="team" id="team">
      <div className="container">
        <div className="section-header text-center">
          <p>Meet Our Team</p>
          <h2>Our Engineers & Workers</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="team-item">
              <div className="team-img">
                <img src={team1} alt="Team Image" />
              </div>
              <div className="team-text">
                <h2>Donald John</h2>
                <p>Engineer</p>
                <div className="team-social">
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-item">
              <div className="team-img">
                <img src={team2} alt="Team Image" />
              </div>
              <div className="team-text">
                <h2>Adam Phillips</h2>
                <p>Engineer</p>
                <div className="team-social">
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-item">
              <div className="team-img">
                <img src={team3} alt="Team Image" />
              </div>
              <div className="team-text">
                <h2>Thomas Olsen</h2>
                <p>Worker</p>
                <div className="team-social">
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-item">
              <div className="team-img">
                <img src={team4} alt="Team Image" />
              </div>
              <div className="team-text">
                <h2>James Alien</h2>
                <p>Worker</p>
                <div className="team-social">
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
