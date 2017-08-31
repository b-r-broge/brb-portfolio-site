import React, { Component } from 'react';

import Baselayout from './baselayout';
import Glowbox from './glowbox';

import '../styles/App.css';
import '../styles/font-awesome-4.7.0/css/font-awesome.css'

const mysteryImg = require('../assets/mysteryWord.png');
const soundImg = require('../assets/soundcloud.png');
const trendingEtsy = require('../assets/etsy_trending.png');

class App extends Component {
  render() {
    // <Glowbox title="BLAMM! Store" content="This box is for the BLAMM! Store project description" img="" live="" gh="" />

    return (
      <Baselayout>
        <div className="body">
          <div id="mission" className="bio">
            <h1> {"< Software Engineer />"} </h1>
            <h2> Full Stack Web Development Solutions</h2>
            <p>Motivated professional with experience in complete software life-cycle; requirements analysis, design, object-oriented development, and client support. Capable of troubleshooting complex JavaScript, Python, hardware, or operating system problems. Approachable, hardworking and capable of synthesizing complex ideas into consumable information for technical and non-technical personnel. Comfortable in a fast paced, Agile environment, and excels where deep team work and dedication to finding a solution is key.</p>

          </div>
          <div id="examples" className="projects">
            <Glowbox title="Etsy - Trending Page" content="This was the first week group project that we worked on with ReactJS.  We did a lot of pair programming to explore and refine the main fetch and parsing the information to allow for the item card sub component to populate the page.  I specifically worked with the fetch, and developed the code for making the page size variable, along with what page we're currently on." tech="ReactJS | Fetch | JavaScript | CSS | Github Pages" img={trendingEtsy} live="https://trending-etsyly.github.io/tiy-trending-etsyly/" gh="https://github.com/trending-etsyly/tiy-trending-etsyly" />
            <Glowbox title="Sound Cloud App" content="This was the last week of frontend with a focus on building a functional website to be built dynamically using ES6 Fetch API calls to the SoundCloud API.  I used Vue.js as a library to add the reusability of templates for several of the components." tech=" VueJS | Fetch | HTML | JavaScript | CSS | Github Pages" img={soundImg} live="https://b-r-broge.github.io/TIY-brb-week-four-project/" gh="https://github.com/b-r-broge/TIY-brb-week-four-project" />
            <Glowbox title="Mystery Word" content="Mystery Word is a simple game developed using NodeJS, Express and Mustaches to provide a full game with a score screen/leaderboard running on Postgres in the backend." tech=" NodeJS | Express | Mustaches | Postgres | Sequelize | CSS | Heroku " img={mysteryImg} live="https://hidden-mountain-92251.herokuapp.com/start" gh="https://github.com/b-r-broge/tiy-week5-mysteryword" />
          </div>
        </div>
      </Baselayout>
    );
  }
}

export default App;
