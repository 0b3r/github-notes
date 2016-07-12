import * as types from '../actions/ActionTypes';
import reducer from '../utils';

const reducers = {
  [types.FETCH_USER_SUCCESS] : (state, {response:{bio}}) => (
    Object.prototype.toString.call(bio) === '[object Object]' ?
    Object.assign({}, bio) :
    state
  )
};

export default (state = {}, action) => reducer(state, action, reducers);