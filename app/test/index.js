import test from 'tape';
import configureStore from 'store';
import { v4 } from 'node-uuid';

const store = configureStore();
const state = store.getState();

const initialState = {
  bio: {},
  repos: [],
  notes: [],
  userSearch: ''
};


test('Redux Store', nest => {

  nest.test('...initial state should match', assert => {
    const msg = 'The inital state of the store should match object';
    const expected = initialState;
    const actual = state;
    assert.deepEqual(actual, expected, msg);
    assert.end();
  });

  nest.test('...adding a note', assert => {
    const msg = 'The notes array should have 1 note';
    const note = {
      id: v4(),
      text: 'This is a new note'
    };
    const expected = Object.assign({}, initialState, { notes: [note] });

    store.subscribe(() => {
      const actual = store.getState();
      assert.deepEqual(actual, expected, msg);
      assert.end();
    });

    store.dispatch({...note, type: 'ADD_NOTE'});
  });

  

});
