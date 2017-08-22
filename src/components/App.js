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
          <Glowbox content="This is the first glowbox" live="" gh="" />
          <Glowbox content="This is the second glowbox" live="" gh="" />
          <Glowbox content="This is the third glowbox" live="" gh="" />
          <Glowbox content="This is the fourth glowbox" live="" gh="" />
        </div>
      </Baselayout>
    );
  }
}

export default App;
