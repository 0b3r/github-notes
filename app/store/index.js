import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import githubApp from './reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

export default () => {

  const middlewares = [routerMiddleware(browserHistory), thunk];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }
  const store = createStore(
    githubApp, 
    applyMiddleware(...middlewares)
  );

  return store;
}
