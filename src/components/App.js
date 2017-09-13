import React, { Component } from 'react';

import Baselayout from './baselayout';
import Glowbox from './glowbox';
import Technologies from './technologies';

import '../styles/App.css';
import '../styles/font-awesome-4.7.0/css/font-awesome.css'

const mysteryImg = require('../assets/mysteryWord.png');
const soundImg = require('../assets/soundcloud.png');
const trendingEtsy = require('../assets/etsy_trending.png');
const blammImg = require('../assets/blamm_homepage.png');

class App extends Component {
  render() {

    return (
      <Baselayout>
        <div className="body">
          <div id="mission" className="bio">
            {/*<img className="slideImg" /> */}
            <h1> {"< Software Engineer />"} </h1>
            <h1> {"< Maker />"} </h1>
            <h2> Full Stack Web Development </h2>
            <p>From fully functional websites to throwing ceramic mugs or brewing beer, I'm never happier then when I'm making something.  I'm driven to solve problems, and my pragmatism helps me find and define a goal, and my creativity, focus on details, and analytical mind becomes the means to accomplishing that end.  I am comfortable behind a laptop, explaining technical concepts to my friends or family, throwing on a potters wheel, or running.  I'm friendly and approachable, and always ready to go the extra mile to help out.</p>

          <p></p>

          </div>
          <div id="techno">
            <Technologies />
          </div>
          <div id="examples" className="projects">
            <Glowbox title="BLAMM - Online store" content="BLAMM was a team project (Brad, Lorien, Amelia, Matt and Matt) building a online store for purchasing super hero (or villian) services.  I developed the API backend using NodeJS and Sequelize to setup and interact with a Postgres database.  Once the backend was established and hosted on Heroku, I then helped the rest of the team develop the frontend React/Redux application, eventually hosting the front end on Surge.sh" tech="ReactJS | Redux | NodeJS | Express | Postgres | Sequelize | Fetch | CSS | Surge.sh | Heroku" img={blammImg} live="http://blammstore.surge.sh" gh="https://github.com/Team-Blamm" />
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
