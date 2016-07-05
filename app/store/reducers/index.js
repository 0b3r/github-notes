import { combineReducers } from 'redux';
import bioReducer from './Github/bio';
import reposReducer from './Github/repos';
import notesReducer from './Notes/notes';


export default combineReducers({
  bio: bioReducer,
  repos: reposReducer,
  notes: notesReducer
});