import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import HomeAluno from './pages/HomeAluno';
import Login from './pages/Login';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomeAluno} />
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
