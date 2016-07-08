import test from 'tape';
import notes from 'store/reducers/notes';
import { 
  ADD_NOTE, 
  EDIT_NOTE, 
  DELETE_NOTE, 
  SET_NOTES
} from 'store/actions/ActionTypes';
import { v4 } from 'node-uuid';

export default () => {
  test('Notes Reducer', nest => {

    const firstNoteId = v4();
    const firstNote = {
      id: firstNoteId,
      text: 'Testing add note'
    };

    const secondNoteId = v4();
    const secondNote = {
      id: secondNoteId,
      text: 'Testing add another note'
    };

    const setNotes = [{
      id: v4(),
      text: 'Setting note test'
    },{
      id: v4(),
      text: 'Setting note test 2'
    },{
      id: v4(),
      text: 'Setting note test 3'
    }];

    nest.test('...inital state', assert => {
      const msg = 'It should handle initial state';
      const expected = true;
      const actual = Array.isArray(notes(undefined, {}));
      assert.equal(actual, expected, msg);
      assert.end();
    });

    nest.test('...ADD_NOTE', assert => {
      // Add first note
      const addMsg = 'It should add first note';
      const addExpected = [firstNote];
      const addActual = notes([], {
        type: ADD_NOTE,
        ...firstNote
      });
      assert.deepEqual(addActual, addExpected, addMsg);

      // Add second note
      const anotherMsg = 'It should add another note';
      const anotherExpected = [secondNote,firstNote];
      const anotherActual = notes([firstNote], {
        type: ADD_NOTE,
        ...secondNote
      });
      assert.deepEqual(anotherActual, anotherExpected, anotherMsg);

      // Order of notes
      const orderMsg = 'New notes should be at index 0 of the array';
      const orderExpected = secondNote;
      const [ orderActual ] = anotherActual;
      assert.deepEqual(orderActual, orderExpected, orderMsg);

      assert.end();
    });

    nest.test('...DELETE_NOTE', assert => {
      const msg = 'It should delete a note';
      const expected = [secondNote];
      const actual = notes([secondNote, firstNote], {
        type: DELETE_NOTE,
        id: firstNoteId
      });
      assert.deepEqual(actual, expected, msg);
      assert.end();
    });

    nest.test('...EDIT_NOTE', assert => {
      const msg = 'It should edit a note';
      const expected = [secondNote, {...firstNote, text: 'Edit test!!'}];
      const actual = notes([secondNote, firstNote], {
        type: EDIT_NOTE,
        id: firstNoteId,
        text: 'Edit test!!'
      });
      assert.deepEqual(actual, expected, msg);
      assert.end();
    });

    nest.test('...SET_NOTES', assert => {
      const msg = 'It should set a new array of notes';
      const expected = setNotes;
      const actual = notes([secondNote, firstNote], {
        type: SET_NOTES,
        notes: setNotes
      });
      assert.deepEqual(actual, expected, msg);
      assert.end();
    });

    nest.test('...handle ID assignment', assert => {
      const msg = 'It should set an ID for new notes if none is provided';
      const noteState = notes([], {
        type: ADD_NOTE,
        text: 'Testing ID assignment'
      });
      const actual = (noteState[0].hasOwnProperty('id') 
                      && noteState[0].id !== '');
      assert.ok(actual, msg);
      assert.end();
    });

  });
}
