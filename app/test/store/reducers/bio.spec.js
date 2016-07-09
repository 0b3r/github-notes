import test from 'tape';
import bio from 'store/reducers/bio';
import { 
  SET_BIO
} from 'store/actions/ActionTypes';


export default () => {
  test('Bio Reducer', nest => {

    const startingBio = {
      firstName: 'Jane',
      lastName: 'Smith',
      age: 24,
      city: 'Toronto',
      state: 'Ontario',
      country: 'Canada',
      website: 'http://example2.com'
    };

    const overwriteBio = {
      firstName: 'John',
      lastName: 'Smith',
      age: 35,
      city: 'San Fransisco',
      state: 'California',
      country: 'United States',
      website: 'http://example.com'
    };

    const dontAllow = [1,2,3]

    nest.test('...SET_BIO', assert => {
      const allowMsg = 'It should set a new object for bio';
      const allowExpected = overwriteBio;
      const allowActual = bio(startingBio, {
        type: SET_BIO,
        bio: overwriteBio
      });
      assert.deepEqual(allowActual, allowExpected, allowMsg);

      const denyMsg = 'It should keep current state if it is not an object';
      const denyExpected = startingBio;
      const denyActual = bio(startingBio, {
        type: SET_BIO,
        bio: dontAllow
      });
      assert.deepEqual(denyActual, denyExpected, denyMsg);
      assert.end();
    });

  });
}

