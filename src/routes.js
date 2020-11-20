import React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';

import About from './views/About';
import Upload from './views/Upload';
import Manage from './views/Manage';
import Landing from './views/Landing';

const routes = (
  <Switch>
    <Route path='/' component={Landing} />
    <Route path='/about' component={About} />
    <Route path='/manage' component={Manage} />
    <Route path='/upload' component={Upload} />
  </Switch>
);

export default routes;
