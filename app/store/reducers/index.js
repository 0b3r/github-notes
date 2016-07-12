import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import userSearch from './userSearch';

export default combineReducers({
  user,
  userSearch,
  routing: routerReducer
});

export const getIsFetching = state => {
  return state.user.isFetching;
}

export const getErrorMessage = state => {
  return state.user.errorMessage;
}

export const getUserBio = state => {
  return state.user.bio;
}

export const getUserRepos = state => {
  return state.user.repos;
}