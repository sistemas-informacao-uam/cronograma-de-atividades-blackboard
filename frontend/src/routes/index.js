import React, { useContext } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import { Context } from '../Context/AuthContext';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Subject from '../pages/Subject';

function CustomRoute({ isPrivate, ...rest }) {
    const { authenticated } = useContext(Context);
  
    if(isPrivate && !authenticated) {
      return <Redirect to="/login" />
    }
  
    return <Route {...rest} />
  }

const Routes = () => {
    const { loading } = useContext(Context);

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <Switch>
            <CustomRoute path="/login" exact component={Login} />
            <CustomRoute isPrivate path="/" exact component={Home} />
            <CustomRoute isPrivate path="/disciplinas/:subject" exact component={Subject} />
            <Redirect to="/" />
        </Switch>
    );
}

export default Routes;
