import React from 'react';
import { Route } from 'react-router';

import About from './About';
import App from './App';
import ClearCut from './ClearCut';

const routes = (
  <Route path='/' component={App}>
    <Route path='/about' component={About} />
    <Route path='/clear-cut' component={ClearCut} />
  </Route>
);

export default routes;
