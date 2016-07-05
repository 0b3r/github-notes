import { combineReducers } from 'redux';
import bioReducer from './reducers/Github/bio';
import reposReducer from './reducers/Github/repos';
import notesReducer from './reducers/Notes/notes';


export default combineReducers({
  bio: bioReducer,
  repos: reposReducer,
  notes: notesReducer
});