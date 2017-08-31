import React, { Component } from 'react';

import '../styles/navbar.css';

const resume = require('../assets/Broge Brad Resume_28_08_2017.pdf');

class NavBar extends Component {

  // const alertEmail = (e) => {
  //   e.preventDefault()
  //   alert("brbroge@gmail.com")
  // }

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
              <a href="" onClick={() => alert("brbroge@gmail.com")}><i className="fa fa-envelope" /> </a>
            </div>
          </div>
        </div>
        <div className="page-sections">
          <a href={resume}><button className="button"> <span className="section">résumé</span> </button></a>
          <a href="#mission"><button className="button"> <span className="section">mission</span> </button></a>
          <a href="#examples"><button className="button"> <span className="section">examples</span> </button></a>
        </div>
      </div>
    );
  }
}

export default NavBar;
