import React, { Component } from 'react';

import '../styles/navbar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <div className="name-links">
          <h1>Brad Broge</h1>
          <div className="links">
            <div className="links-one">
              <a href="https://www.linkedin.com/in/brbroge/"><i className="fa fa-linkedin-square" /></a>
              <a href="https://github.com/b-r-broge"><i className="fa fa-github-square" /></a>
            </div>
            <div className="links-two">
              <i className="fa fa-envelope" />
            </div>
          </div>
        </div>
        <div className="page-sections">
          <button> <span className="section">mission</span> </button>
          <button> <span className="section">résumé</span> </button>
          <button> <span className="section">examples</span> </button>
        </div>
      </div>
    );
  }
}

export default NavBar;
