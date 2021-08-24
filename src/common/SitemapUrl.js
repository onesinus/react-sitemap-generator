import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";

import CarDetail from '../components/CarDetail'

export default (
    <Switch>
        <Route path="/car-detail/:id">
            <CarDetail />
        </Route>
    </Switch>
)