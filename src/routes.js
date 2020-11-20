import React from 'react';
import { Route } from 'react-router';

import About from './views/About';
import App from './views/App';
import ClearCut from './views/ClearCut';
import Manage from './views/Manage';

const routes = (
  <Route path='/' component={App}>
    <Route path='/about' component={About} />
    <Route path='/manage' component={Manage} />
    <Route path='/upload' component={ClearCut} />
  </Route>
);

export default routes;
