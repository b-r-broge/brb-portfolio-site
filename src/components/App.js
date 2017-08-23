import React, { Component } from 'react';

import Baselayout from './baselayout';
import Glowbox from './glowbox';

import '../styles/App.css';
import '../styles/font-awesome-4.7.0/css/font-awesome.css'

const mysteryImg = require('../assets/mysteryWord.png');

class App extends Component {
  render() {
    return (
      <Baselayout>
        <div className="body">
          <div className="bio">

          </div>
          <div className="projects">
            <Glowbox title="BLAMM! Store" content="This box is for the BLAMM! Store project description" img="" live="" gh="" />
            <Glowbox title="Gobble Social Media" content="This is the second glowbox" img="" live="" gh="" />
            <Glowbox title="Mystery Word" content="This is the description of the Mystery Word Project built in nodeJS" tech="NodeJS | Mustaches | Postgres | Sequelize" img={mysteryImg} live="https://hidden-mountain-92251.herokuapp.com/start" gh="https://github.com/b-r-broge/tiy-week5-mysteryword" />
          </div>
        </div>
      </Baselayout>
    );
  }
}

export default App;
