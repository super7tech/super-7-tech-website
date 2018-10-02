import React, { Component } from 'react';
import './style.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
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
