import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Rooutes
import SearchRoute from "./search.js";
import ErrorRoute from "./error.js";

/**
 * Routes
 * @desc Manages application routing logic
 */
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/:query?" view="search" component={SearchRoute}/>
                <Route view="404" component={ErrorRoute}/>
            </Switch>
        </BrowserRouter>
    )
}