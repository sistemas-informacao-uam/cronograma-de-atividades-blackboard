import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import PrivateRoute from './PrivateRoute';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Subject from '../pages/Subject';

const Routes = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/login" exact component={Login} />
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute
            path="/disciplinas/:subject"
            exact
            component={Subject}
          />
          <Redirect to="/" />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default Routes;
