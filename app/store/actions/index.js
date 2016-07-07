import * as types from './ActionTypes';

// Search User Actions
export function searchUser(username) {
  return { type: types.SEARCH_USER, username}
}

// Notes Actions
export function addNote(text) {
  return { type: types.ADD_NOTE, text}
}

export function editNote(id, text) {
  return { type: types.EDIT_NOTE, id, text}
}

export function deleteNote(id) {
  return { type: types.DELETE_NOTE, id}
}

export function setNotes(notes) {
  return { type: types.SET_NOTES, notes}
}

// Bio Actions
export function setBio(bio) {
  return { type: types.SET_BIO, bio}
}

// Repo Actions
export function setRepos(repos) {
  return { type: types.SET_REPOS, repos}
}