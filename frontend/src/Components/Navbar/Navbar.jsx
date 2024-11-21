import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [carouselOpen, setCarouselOpen] = useState(false);

  const toggleCarousel = () => {
    setCarouselOpen(!carouselOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to="/"><img src="src/assets/logo.png" alt="Logo" /></Link>
        </div>
        <div className="topRight">
          <div className="searchBar">
            <input type="search" placeholder="Search" />
            <a href="#">
              <span className="material-symbols-outlined">
                search
              </span>
            </a>
          </div>
          <a href="#" id="first">Donate</a>
          <a href="#" id="second">Need Support</a>
        </div>
      </div>

      <div className="navbarSecond">
        <ul className="left">
          <li>Get Support
            <span className="material-symbols-outlined" id="more">
              expand_more
            </span>
          </li>
          
          <li>Learn about mental health
            <span className="material-symbols-outlined" id="more2">
              expand_more
            </span></li>
          
          <li>Get involved
            <span className="material-symbols-outlined" id="more3">
              expand_more
            </span>
          </li>
          <Link to={'/doctors'}>Find Doctors</Link>
        </ul>
        <Link to="/login">Login</Link>
      </div>

      {/* Carousel for small screens */}
      {/* <div className="carousel">
        <div className="carousel-btn" onClick={toggleCarousel}>
          Menu
        </div>
        {carouselOpen && (
          <div className="carousel-content">
            <ul>
              <li>Get Support</li>
              <li>Learn about mental health</li>
              <li>Get involved</li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>
        )}
      </div>   */}
    </>
  );
};

export default Navbar;
