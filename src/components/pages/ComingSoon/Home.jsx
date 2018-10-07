import React, { Component } from 'react';
import hero from './resources/hero.svg';
import './resources/style.css';

const heroStyle = {
  backgroundImage: `url(${hero})`
};

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-hero" style={heroStyle}>
          {/* <img src={hero} alt="Hero" /> */}
          <div className="Home-hero-content">
            <div className="Home-hero-title">
              <h1>Software Development <br/>&amp; Consultancy</h1>
            </div>
            <div className="Home-hero-copy">
              <p>Specialists in JavaScript, PHP, Docker, AWS.</p>
            </div>
          </div>
        </div>
        <div className="Article">
          <div className="Article-title">
            <div className="Name">
              <strong>Super 7 Technologies</strong>
            </div>
            <div className="Website">
              <small>super7.tech</small>
            </div>
          </div>
          <div className="Article-copy">
            <p>
              <em>09:00 Wednesday, 31 October 2018 (BST)</em>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
