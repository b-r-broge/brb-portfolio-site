import React, { Component } from 'react';

import Baselayout from './baselayout'

import '../styles/header.css';

class Header extends Component {
  render() {
    return (
      <div className="nav-bar">
        <div className="name-links">
          <h1>Brad Broge</h1>
          <div className="links">
            <i className="fa fa-linkedin-square fa-lg" />
            <i className="fa fa-github-square fa-lg" />
            <i className="fa fa-envelope fa-lg" />
            <i className="fa fa-phone-square fa-lg" />
          </div>
        </div>
        <div className="page-sections">

        </div>
      </div>
    );
  }
}

export default Header;
