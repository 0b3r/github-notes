import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import bio from './bio';
import repos from './repos';
// import notes from './notes';
import userSearch from './userSearch';
// import byUsername from './byUsername';

import fetchUserGithub from '../../api';
import reducer from '../utils';




const isFetchingReducers = {
  'FETCH_USER_REQUEST' : (state, action) => true,
  'FETCH_USER_SUCCESS' : (state, action) => false,
  'FETCH_USER_FAILURE' : (state, action) => false,
};
const isFetching = (state = false, action) => reducer(state, action, isFetchingReducers);



const user = combineReducers({
  repos,
  isFetching,
  errorMessage
});



export default combineReducers({
  user,
  userSearch,
  routing: routerReducer
});

