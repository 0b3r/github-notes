import test from 'tape';
import bio from 'store/reducers/repos';
import { SET_REPOS } from 'store/actions/ActionTypes';


export default () => {
  test('Repos Reducer', nest => {

    const startingRepos = [{
      name: 'AngularJs',
      description: 'Awesome Javascript Framework'
    },{
      name: 'ReactJS',
      description: 'Awesommer Javascript Framework'
    }];

    const overwriteRepos = [{
      name: 'jQuery',
      description: 'Best thing ever'
    },{
      name: 'Lodash',
      description: 'Bester thing'
    },,{
      name: 'tape',
      description: 'Nice testing thing'
    }];

    const dontAllow = {
      name: 'Some random object'
    };

    nest.test('...SET_REPOS', assert => {
      const allowMsg = 'It should set a new array for repos';
      const allowExpected = overwriteRepos;
      const allowActual = bio(startingRepos, {
        type: SET_REPOS,
        repos: overwriteRepos
      });
      assert.deepEqual(allowActual, allowExpected, allowMsg);

      const denyMsg = 'It should keep current state if it is not an array';
      const denyExpected = startingRepos;
      const denyActual = bio(startingRepos, {
        type: SET_REPOS,
        repos: dontAllow
      });
      assert.deepEqual(denyActual, denyExpected, denyMsg);
      assert.end();
    });

  });
}

