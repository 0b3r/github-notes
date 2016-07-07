import { SEARCH_USER } from '../actions/ActionTypes';

export default (state = '', {type, username} = {}) => {
  switch(type) {
    case SEARCH_USER:
      return username
    default:
      return state;
  }
};