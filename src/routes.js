import React from 'react';

import { BrowserRouter,Switch,Route } from 'react-router-dom';

import registercontroller from './controllers/registercontroller';

import indexcontroller from './controllers/indexcontroller';

export default function Routes () {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={registercontroller} />
                <Route path='/index' component={indexcontroller} />
            </Switch>
        </BrowserRouter>
    )
}