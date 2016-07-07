import { SET_BIO } from '../actions/ActionTypes';

export default ( state = {}, { bio, type } = {} ) => {
  switch (type) {
    case SET_BIO:
      return Object.assign({}, bio);
    default:
      return state;
  }
};
