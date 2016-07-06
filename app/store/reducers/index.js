import { combineReducers } from 'redux';
import bio from './Github/bio';
import repos from './Github/repos';
import notes from './Notes/notes';


export default combineReducers({
  bio,
  repos,
  notes
});

