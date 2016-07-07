import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import githubApp from './reducers';
import { loadState, saveState } from './localStorage';

export default () => {
  //const persistedState = loadState();
  //const store = createStore(githubApp, persistedState);
  const store = createStore(githubApp);

  /*store.subscribe(throttle(() => {
    saveState({
      users: store.getState().users,
    });
  }, 1000));*/

  return store;
}