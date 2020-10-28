import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { useUser } from './context/User';

import Home from './pages/Home';
import Login from './pages/Login';
import Subject from './pages/Subject';

const Routes = () => {
    const { user } = useUser();

    return (
            <BrowserRouter>
                {user.name !== '' ? (    
                    <Switch>
                        <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/disciplina" component={Subject} />
                    </Switch>
                ) : (
                    <Switch>
                        <Route path="/" component={Login} />
                    </Switch>
                )}
            </BrowserRouter>
    );
}

export default Routes;
