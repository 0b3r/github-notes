import { combineReducers } from 'redux';
import bio from './bio';
import repos from './repos';
// import notes from './notes';
import * as types from '../actions/ActionTypes';
import reducer from '../utils';

const isFetching = (state = false, action) => reducer(state, action, {
  [types.FETCH_USER_REQUEST] : (state, action) => true,
  [types.FETCH_USER_SUCCESS] : (state, action) => false,
  [types.FETCH_USER_FAILURE] : (state, action) => false
});

const errorMessage = (state = false, action) => reducer(state, action, {
  [types.FETCH_USER_REQUEST] : (state, { message }) => null,
  [types.FETCH_USER_SUCCESS] : (state, { message }) => null,
  [types.FETCH_USER_FAILURE] : (state, { message }) => message
});

const user = combineReducers({
  repos,
  bio,
  isFetching,
  errorMessage
});

export default user;