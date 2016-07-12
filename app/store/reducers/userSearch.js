import * as types from '../actions/ActionTypes';
import reducer from '../utils';

const reducers = {
  [types.FETCH_USER_SUCCESS] : (state, { username }) => (
    typeof username === 'string' ? username : state
  )
};

export default (state = '', action) => reducer(state, action, reducers);
