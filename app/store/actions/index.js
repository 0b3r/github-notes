import { push } from 'react-router-redux';
import * as types from './ActionTypes';
import { v4 } from 'node-uuid';
import fetchGithubInfo from '../../api';

// Search User Actions
//export const searchUser = (username) => ({ type: types.SEARCH_USER, username });

export const searchUser = (username) => (dispatch, getState) => {

  dispatch(push(`/profile/${username}`));

  // if (getIsFetching(getState(), username)) {
  //   return Promise.resolve();
  // }

  // dispatch({
  //   type: types.FETCH_USER_REQUEST,
  //   username
  // });

  // return fetchGithubInfo.then(
  //   response => {
  //     dispatch({
  //       type: types.FETCH_USER_SUCCESS,
  //       username,
  //       response
  //     });
  //   },
  //   error => {
  //     dispacth({
  //       type: types.FETCH_USER_ERROR,
  //       username,
  //       message: error.message || `Failed to get Github 
  //                                   information for ${username}`
  //     });
  //   }
  // );
};

// Notes Actions
export const addNote = text => ({ type: types.ADD_NOTE, id: v4(), text});
export const editNote = (id, text) => ({ type: types.EDIT_NOTE, id, text});
export const deleteNote = id => ({ type: types.DELETE_NOTE, id});
export const setNotes = notes => ({ type: types.SET_NOTES, notes});

// Bio Actions
export const setBio = bio => ({ type: types.SET_BIO, bio});

// Repo Actions
export const setRepos = repos => ({ type: types.SET_REPOS, repos});

// Fetch User Actions
// export const fetchUserInfo = username => {

//   return api.fetchUserInfo(username).then(
//     response => {
//       console.log(response);
//     },
//     error => {
//       console.log(error);
//     });
// }
