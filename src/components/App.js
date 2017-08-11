import React, { Component } from 'react';

import Baselayout from './baselayout'

import '../styles/App.css';
import '../styles/font-awesome-4.7.0/css/font-awesome.css'

class App extends Component {
  render() {
    return (
      <Baselayout>
        <div className="body">
        </div>
      </Baselayout>
    );
  }
}

export default App;
