import React, { Component } from 'react';

import '../styles/glowbox.css';

class Glowbox extends Component {
  render() {
    return (
      <div className="glowbox">
        <hr />
        <div className="image">
        </div>
        <div className="language">
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
