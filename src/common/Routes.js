import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";

import Home from '../components/Home'
import About from '../components/About'
import Users from '../components/Users'

export default (
    <Switch>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/users">
            <Users />
        </Route>
        <Route path="/user/:id">
            <Users />
        </Route>
        <Route path="/" exact>
            <Home />
        </Route>
    </Switch>
)