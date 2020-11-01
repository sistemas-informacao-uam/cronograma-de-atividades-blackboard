import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Subject from './pages/Subject';

const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/disciplina" component={Subject} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
