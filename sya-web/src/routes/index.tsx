import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';

import Profile from '../pages/Profile';
import Employee from '../pages/Profile';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/profile" component={Profile} isPrivate />
    <Route path="/employees" component={Employee} isPrivate />

    {/* <Route path="/dashboard" component={Dashboard} isPrivate /> */}
  </Switch>
);

export default Routes;
