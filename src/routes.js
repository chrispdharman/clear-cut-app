import React from 'react';
import { Route } from 'react-router';

import App from './App';
import ClearCut from './ClearCut';
import Welcome from './Welcome';

const routes = (
  <Route path='/' component={App}>
    <Route component={Welcome} />
    <Route path='/clear-cut' component={ClearCut} />
  </Route>
);

export default routes;
