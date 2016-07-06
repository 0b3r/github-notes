import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import githubApp from './reducers';

export default () => {
  const middlewares = [];

  if(process.env.NODE_ENV !== 'production'){
    middlewares.push(createLogger());
  }

  return createStore(
    githubApp,
    applyMiddleware(...middlewares)
  );
}