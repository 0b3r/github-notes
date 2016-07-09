import { SET_REPOS } from '../actions/ActionTypes';
import reducer from '../utils';

const reducers = {
  [SET_REPOS] : (state, { repos }) => (
    Array.isArray(repos) ? repos.concat() : state
  )
};

export default (state = {}, action) => reducer(state, action, reducers);
