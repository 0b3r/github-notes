import * as types from './ActionTypes';
import { v4 } from 'node-uuid';
import fetchGithubInfo from '../../api';
import { getIsFetching } from '../reducers';

export const searchUser = (username) => (dispatch, getState) => {

  if(getIsFetching(getState())){
    return Promise.resolve();
  }

  dispatch({type: types.FETCH_USER_REQUEST});

  return fetchGithubInfo(username).then(
    response => {
      dispatch({
        type: types.FETCH_USER_SUCCESS,
        username,
        response
      });
    },
    ({data, status}) => {
      dispatch({
        type: types.FETCH_USER_FAILURE,
        message: `${status}: ${data.message} (user: "${username}")`
      });
    }
  );
};

// Notes Actions
export const addNote = text => ({ type: types.ADD_NOTE, id: v4(), text});
export const editNote = (id, text) => ({ type: types.EDIT_NOTE, id, text});
export const deleteNote = id => ({ type: types.DELETE_NOTE, id});
export const setNotes = notes => ({ type: types.SET_NOTES, notes});

