import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </header>
    );
  }
}

export default Header;