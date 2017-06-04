import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Index from './components/Index';
import NotFound from './components/NotFound';

var routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Index}/>
        <Route path="*" component={NotFound}/>
    </Route>
);

export default routes;
