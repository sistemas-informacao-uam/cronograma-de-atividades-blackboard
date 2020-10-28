import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { useUser } from './context/User';

import Home from './pages/Home';
import Login from './pages/Login';


const Routes = () => {
    const { user } = useUser();

    return (
            <BrowserRouter>
                {user.name !== '' ? (    
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" component={Login} />
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
