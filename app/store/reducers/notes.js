import { 
  ADD_NOTE, 
  EDIT_NOTE, 
  DELETE_NOTE, 
  SET_NOTES
} from '../actions/ActionTypes';
import { v4 } from 'node-uuid';

const note = (state, {id, text, type} = {}) => {
  switch(type) {
    case ADD_NOTE:
      return {
        id: id || v4(),
        text
      };
    case EDIT_NOTE:
      return Object.assign({}, state, {text});
    default:
      return state;
  }
};

const notes = (state = [], action) => {
  switch(action.type) {
    case ADD_NOTE:
      return [
        note(undefined, action),
        ...state
      ]
    case EDIT_NOTE:
      return state.map(n => 
        n.id === action.id ? 
        note(n, action) : 
        n
      );
    case DELETE_NOTE:
      return state.filter(n => n.id !== action.id);
    case SET_NOTES:
      return action.notes.concat();
    default:
      return state;
  }
};

export default notes;
