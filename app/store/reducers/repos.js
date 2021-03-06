import * as types from '../actions/ActionTypes';
import reducer from '../utils';

const reducers = {
  [types.FETCH_USER_SUCCESS] : (state, {response:{repos}}) => {
    return Array.isArray(repos) ? repos.concat() : state
  }
};

export default (state = [], action) => reducer(state, action, reducers);
