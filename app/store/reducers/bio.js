import { SET_BIO } from '../actions/ActionTypes';
import reducer from '../utils';

const reducers = {
  [SET_BIO] : (state, { bio }) => (
    Object.prototype.toString.call(bio) === '[object Object]' ?
    Object.assign({}, bio) :
    state
  )
};

export default (state = {}, action) => reducer(state, action, reducers);
