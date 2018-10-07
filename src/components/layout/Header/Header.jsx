import React, { Component } from 'react';
import logo from './resources/logo.svg';
import { Link } from 'react-router-dom';
import './resources/style.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="Header-logo">
          <img src={logo} alt="Super 7 Technologies" />
        </div>
        <div className="Header-breadcrumb-nav">
          <div className="Header-breadcrumb-nav-item">
            Home
          </div>
        </div>
      </header>
    );
  }
}

export default Header;