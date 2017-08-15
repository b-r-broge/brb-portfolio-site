import React, { Component } from 'react';

import NavBar from './navbar';

import '../styles/baselayout.css';

class Baselayout extends Component {
  render() {
    return (
      <div className="page">
        <NavBar />
        {this.props.children}
        <NavBar />
      </div>
    );
  }
}

export default Baselayout;
