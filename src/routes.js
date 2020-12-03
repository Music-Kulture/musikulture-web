import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Tracks from './pages/Tracks';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Profile} path="/profile" exact />
            <Route component={Tracks} path="/tracks" exact />
        </BrowserRouter>
    );
}

export default Routes;