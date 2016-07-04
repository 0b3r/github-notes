import React from 'react';
import { render } from 'react-dom';
import { 
  Router, 
  Route, 
  IndexRoute, 
  hashHistory 
} from 'react-router';

import createRoutes from './config/routes';

const routes = createRoutes(React, Route, IndexRoute);

render(
  <Router history={hashHistory}>
    { routes() }
  </Router>,
  document.getElementById('app')
);