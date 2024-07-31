import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import logo from '../img/Logo.png';
const NavBar = () => {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.screenY >= 100) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener('scroll', setFixed);
  return (
    <div className="nav-bar">
      <div className="container">
        <nav
          className={
            fix
              ? 'navbar fixed navbar-expand-lg bg-dark navbar-dark '
              : 'navbar navbar-expand-lg bg-dark navbar-dark '
          }
        >
          <Nav.Link href="#topbar" className=" navbar-brand">
            <img src={logo} alt="" />
          </Nav.Link>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav mr-auto">
              <Nav.Link>
                <img
                  src={logo}
                  className="imgLogo"
                  alt=""
                  style={{ width: '100px' }}
                />
              </Nav.Link>
              <Nav.Link href="#topbar" className="nav-item nav-link active">
                Home
              </Nav.Link>

              <Nav.Link href="#about" className="nav-item nav-link">
                About
              </Nav.Link>

              <Nav.Link href="#service" className="nav-item nav-link">
                Service
              </Nav.Link>

              <Nav.Link href="#price" className="nav-item nav-link">
                Price
              </Nav.Link>

              <Nav.Link href="#location" className="nav-item nav-link">
                Washing Points
              </Nav.Link>

              <Nav.Link href="#contact" className="nav-item nav-link">
                Contact
              </Nav.Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
