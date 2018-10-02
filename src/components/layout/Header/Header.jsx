import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './style.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className="Header-title">Coming Soon</h1>
        {/* <Link to='/'>Home</Link>
        <Link to='/about'>About</Link> */}
      </header>
    );
  }
}

export default Header;