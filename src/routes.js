import React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';

import About from './views/clear-cut/About';
import Upload from './views/clear-cut/Upload';
import Manage from './views/clear-cut/Manage';
import Landing from './views/clear-cut/Landing';

const routes = (
  <Switch>
    <Route path='/clear-cut/about' component={About} />
    <Route path='/clear-cut/manage' component={Manage} />
    <Route path='/clear-cut/upload' component={Upload} />
    <Route path='/clear-cut' component={Landing} />
  </Switch>
);

export default routes;
