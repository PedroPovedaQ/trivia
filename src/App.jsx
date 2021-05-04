import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import React from 'react';
import './App.css';
import Home from './components/Home';
import Trivia from './components/Trivia';

// Welcome Screen
const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/trivia">
        <Trivia />
      </Route>
    </Switch>
  </Router>
);

export default hot(module)(App);
