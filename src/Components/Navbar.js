import React from 'react';
import './Styles/Navbar.css';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />

      <div className="navbar-title">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Twopeople">Features</Link></li>
          <li><Link to="/clients">Community</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/marketing">Pricing</Link></li>
        <button className="sign">Register Now &#8594;</button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
