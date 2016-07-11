import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import createRepos from './Github/Repos';
import createUserProfile from './Github/UserProfile';
import createNotes from './Notes/Notes';
import fetchGithubInfo from '../api';

export default (React) => {

  const Repos = createRepos(React);
  const UserProfile = createUserProfile(React);
  const Notes = createNotes(React);



  const profile = ({dispatch}) => {
 
    // fetchGithubInfo('0b3r').then(({repos}) => {
    //   console.log(response);
    //   dispatch({type: 'FETCH_USER_SUCCESS', repos});
    // });

    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile />
        </div>
        <div className="col-md-4">
          <Repos />
        </div>
        <div className="col-md-4">
          <Notes />
        </div>
      </div>
    )
  }

  const mapStateToProps = (state, { params }) => {
    const username = params.username || '';
    return {
      username
    }
  }

  return withRouter(connect(
    mapStateToProps
  )(profile)); 
}
