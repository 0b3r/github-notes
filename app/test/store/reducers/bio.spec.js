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

    nest.test('...SET_BIO', assert => {
      const msg = 'It should set a new object for bio';
      const expected = overwriteBio;
      const actual = bio(startingBio, {
        type: SET_BIO,
        bio: overwriteBio
      });
      assert.deepEqual(actual, expected, msg);
      assert.end();
    });

  });
}

