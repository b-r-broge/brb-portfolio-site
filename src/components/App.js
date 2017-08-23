import React, { Component } from 'react';

import Baselayout from './baselayout';
import Glowbox from './glowbox';

import '../styles/App.css';
import '../styles/font-awesome-4.7.0/css/font-awesome.css'

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
            <Glowbox title="Mystery Word" content="This is the third glowbox" img="" live="" gh="" />
          </div>
        </div>
      </Baselayout>
    );
  }
}

export default App;
