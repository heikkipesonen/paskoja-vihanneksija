import 'core-js/fn/object/assign';
import React from 'react';
import App from './components/Main';
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute } from 'react-router';


render((
  <Router>
    <Route path="/" component={App}>
    </Route>
  </Router>
),document.getElementById('app'));
