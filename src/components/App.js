import React, { Component } from 'react';

import Baselayout from './baselayout';
import Glowbox from './glowbox';

import '../styles/App.css';
import '../styles/font-awesome-4.7.0/css/font-awesome.css'

const mysteryImg = require('../assets/mysteryWord.png');
const soundImg = require('../assets/soundcloud.png')

class App extends Component {
  render() {
    // <Glowbox title="BLAMM! Store" content="This box is for the BLAMM! Store project description" img="" live="" gh="" />

    return (
      <Baselayout>
        <div className="body">
          <div className="bio">

          </div>
          <div className="projects">
            <Glowbox title="Sound Cloud App" content="This was the last week of frontend with a focus on building a functional website to be built dynamically using ES6 Fetch API calls to the SoundCloud API.  I used Vue.js as a library to add the reusability of templates for several of the components." tech=" VueJS | Fetch | HTML | JavaScript | CSS " img={soundImg} live="https://b-r-broge.github.io/TIY-brb-week-four-project/" gh="https://github.com/b-r-broge/TIY-brb-week-four-project" />
            <Glowbox title="Mystery Word" content="Mystery Word is a simple game developed using NodeJS, Express and Mustaches to provide a full game with a score screen/leaderboard running on Postgres in the backend." tech=" NodeJS | Express | Mustaches | Postgres | Sequelize | CSS | Heroku " img={mysteryImg} live="https://hidden-mountain-92251.herokuapp.com/start" gh="https://github.com/b-r-broge/tiy-week5-mysteryword" />
          </div>
        </div>
      </Baselayout>
    );
  }
}

export default App;
