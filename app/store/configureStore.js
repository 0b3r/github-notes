import { createStore } from 'redux';
import githubApp from './reducers';

export default () => {
  return createStore(githubApp);
}