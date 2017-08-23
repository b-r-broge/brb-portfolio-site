import React, { Component } from 'react';

import '../styles/glowbox.css';

class Glowbox extends Component {
  render() {
    return (
      <div className="glowbox">
        <hr />
        <div className="image-box">
          <img className="img" src={this.props.img} alt="Screenshot of the deployed product" />
        </div>
        <div className="language">
          <div className="title">
            <h4> {this.props.title} </h4>
          </div>
          <div className="content">
            <p> {this.props.content} </p>
          </div>
          <div className="links">
            <a href={this.props.live}>Live Site</a>
            <a href={this.props.gh}>Code on Github</a>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Glowbox;
