import { SET_REPOS } from '../actions/ActionTypes';

export default ( state = [], { repos, type } = {} ) => {
  switch (type) {
    case SET_REPOS:
      return repos.concat();
    default:
      return state;
  }
};
