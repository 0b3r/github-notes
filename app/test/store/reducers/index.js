import testNotesReducer from './notes.spec.js';
import testBioReducer from './bio.spec.js';
import testReposReducer from './repos.spec.js';
import testUserSearchReducer from './userSearch.spec.js';

export default () => {
  testNotesReducer();
  testBioReducer();
  testReposReducer();
  testUserSearchReducer();
}