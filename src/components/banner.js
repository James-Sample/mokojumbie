import React from "react";
import { Link } from "react-router-dom";
import "../styles/banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <Link to="caribbean-catering-service" className="title-link">
        <h1 className="title">Mokojumbie</h1>
      </Link>
      <p className="description">Authentic Caribbean Cuisine</p>
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="our-story" className="link">
            Our Story
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link to="our-food" className="link">
            Our Food
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link to="our-people" className="link">
            Our People
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link to="contact-us" className="link">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Banner;
