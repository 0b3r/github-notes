import test from 'tape';
import userSearch from 'store/reducers/userSearch';
import { SEARCH_USER } from 'store/actions/ActionTypes';

export default () => {
  test('User Search Reducer', nest => {
    const startingUser = 'john_smith';
    const overwriteUser = 'jane_smith';
    const dontAllow = 234234;

    nest.test('...SEARCH_USER', assert => {
      const allowMsg = 'It should set a new username';
      const allowExpected = overwriteUser;
      const allowActual = userSearch(startingUser, {
        type: SEARCH_USER,
        username: overwriteUser
      });
      assert.deepEqual(allowActual, allowExpected, allowMsg);

      const denyMsg = `It should keep current user 
                      if username is not a string`;
      const denyExpected = startingUser;
      const denyActual = userSearch(startingUser, {
        type: SEARCH_USER,
        username: dontAllow
      });
      assert.deepEqual(denyActual, denyExpected, denyMsg);
      assert.end();
    });
  });

}
