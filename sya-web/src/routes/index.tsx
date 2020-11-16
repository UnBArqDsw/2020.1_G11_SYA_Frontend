import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';

import Profile from '../pages/Profile';
import Employee from '../pages/Employee';
import ClientLink from '../pages/ClientLink';
import Work from '../pages/Works';

import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/profile" component={Profile}  />
    <Route path="/works" component={Work}  />
    <Route path="/employees" component={Employee}  />
    <Route path="/client" component={ClientLink}  />

    <Route path="/signUp" component={SignUp} />

    {/* <Route path="/dashboard" component={Dashboard} isPrivate /> */}
  </Switch>
);

export default Routes;
