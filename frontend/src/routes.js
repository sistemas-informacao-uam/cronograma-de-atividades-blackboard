import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Subjects from './pages/Subjects';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/subjects" component={Subjects} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
