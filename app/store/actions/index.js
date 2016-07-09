import * as types from './ActionTypes';

// Search User Actions
export const searchUser = (username) => ({ type: types.SEARCH_USER, username });

// Notes Actions
export const addNote = text => ({ type: types.ADD_NOTE, text});
export const editNote = (id, text) => ({ type: types.EDIT_NOTE, id, text});
export const deleteNote = id => ({ type: types.DELETE_NOTE, id});
export const setNotes = notes => ({ type: types.SET_NOTES, notes});

// Bio Actions
export const setBio = bio => ({ type: types.SET_BIO, bio});

// Repo Actions
export const setRepos = repos => ({ type: types.SET_REPOS, repos});
