import React from 'react';
import { render } from 'react-dom';
import { 
  Router, 
  Route, 
  IndexRoute, 
  hashHistory 
} from 'react-router';
import createRoutes from './config/routes';
import { createStore } from 'redux';
import appReducer from './store'

const store = createStore(appReducer);
const routes = createRoutes(React, Route, IndexRoute, store);

store.subscribe(() => {
  console.log(store.getState());
});


render(
  <Router history={hashHistory}>
    { routes() }
  </Router>,
  document.getElementById('app')
);