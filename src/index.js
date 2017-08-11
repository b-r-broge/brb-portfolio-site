import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './styles/normalize.css';
import './styles/index.css';

import App from './components/App';
import Project from './components/Project'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/:project" component={Project} />
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
  );
