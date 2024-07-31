import { useState } from 'react';

import './App.css';
import TopBar from './Components/TopBar';
import NavBar from './Components/NavBar';
import Carousel from './Components/Carousel';
import About from './Components/About';
import Service from './Components/Service';
import Facts from './Components/Facts';
import Price from './Components/Price';
import Location from './Components/Location';
import Team from './Components/Team';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Banner from './Components/Banner';

function App() {
  return (
    <>
      <TopBar />
      <NavBar />
      <Banner />
      <About />
      <Service />
      <Facts />
      <Price />
      <Location />
      <Team />
      <Contact />

      {/* <!-- Back to top button --> */}
      <a href="#" className="back-to-top">
        <i className="fa fa-chevron-up"></i>
      </a>
      <Footer />
    </>
  );
}

export default App;
