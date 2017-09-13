import React, { Component } from 'react';

import '../styles/technologies.css';

const CSS = require('../assets/CSS_Badge_512.png');
const Git = require('../assets/git_Badge_512.png');
const Github = require('../assets/github_Badge_512.png');
const Heroku = require('../assets/Heroku_Badge_512.png');
const HTML = require('../assets/HTML5_Badge_512.png');
const JS = require('../assets/JavaScript_Badge_512.png');
const Mongo = require('../assets/Mongo_Badge_512.png');
const NodeJS = require('../assets/NodeJS_Badge_512.png');
const Postgres = require('../assets/Postgres_Badge_512.png');
const ReactJS = require('../assets/React_Badge_512.png');
const Ubuntu = require('../assets/ubuntu_Badge_512.png');

class Technologies extends Component {
  render() {
    return (
      <div className="technologies">
        <img className="badge" src={ReactJS} alt="ReactJS" title="ReactJS" />
        <img className="badge" src={HTML} alt="HTML" title="HTML" />
        <img className="badge" src={CSS} alt="CSS" title="CSS" />
        <img className="badge" src={JS} alt="JS" title="JS" />
        <img className="badge" src={NodeJS} alt="NodeJS" title="NodeJS" />
        <img className="badge" src={Mongo} alt="Mongo" title="Mongo" />
        <img className="badge" src={Postgres} alt="Postgres" title="Postgres" />
        <img className="badge" src={Git} alt="Git" title="Git" />
        <img className="badge" src={Github} alt="Github" title="Github" />
        <img className="badge" src={Heroku} alt="Heroku" title="Heroku" />
        <img className="badge" src={Ubuntu} alt="Ubuntu" title="Ubuntu" />
      </div>
    );
  }
}

export default Technologies;
