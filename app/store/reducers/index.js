import { combineReducers } from 'redux';
import bio from './bio';
import repos from './repos';
import notes from './notes';
import userSearch from './userSearch';

export default combineReducers({
  bio,
  repos,
  notes,
  userSearch
});


