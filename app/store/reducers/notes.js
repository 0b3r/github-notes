import { 
  ADD_NOTE, 
  EDIT_NOTE, 
  DELETE_NOTE, 
  SET_NOTES
} from '../actions/ActionTypes';
import { v4 } from 'node-uuid';
import reducer from '../utils';

const reducers = {
  [ADD_NOTE] : (state, { id, text }) => ([{id,text}, ...state]),
  [EDIT_NOTE] : (state, {id, text}) => (
    state.map(n => (
      n.id === id ? Object.assign({}, n, {text}) : n
    ))
  ),
  [DELETE_NOTE] : (state, { id }) => state.filter(n => n.id !== id),
  [SET_NOTES] : (state, { notes }) => (
    Array.isArray(notes) ? notes.concat() : state
  )
};

export default (state = [], action) => reducer(state, action, reducers);
