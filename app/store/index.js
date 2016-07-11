import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import githubApp from './reducers';

export default () => {

  const middlewares = [routerMiddleware(browserHistory)]
  const store = createStore(
    githubApp, 
    applyMiddleware(...middlewares)
  );

  return store;
}
