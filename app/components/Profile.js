import { connect } from 'react-redux';
//import { withRouter } from 'react-router';
import createReposList from './Github/ReposList';
import createUserProfile from './Github/UserProfile';
import createNotes from './Notes/Notes';
import * as actions from '../store/actions';
import {
  getIsFetching, 
  getErrorMessage, 
  getUserBio, 
  getUserRepos
} from '../store/reducers';

export default (React) => {

  const ReposList = createReposList(React);
  const UserProfile = createUserProfile(React);
  const Notes = createNotes(React);

  const profile = ({dispatch, isFetching, errorMessage, repos}) => {

    if(isFetching){
      return <p>Loading...</p>;
    }

    if(errorMessage){
      return <h2>{ errorMessage }</h2>;
    }

    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile />
        </div>
        <div className="col-md-4">
          <ReposList repos={repos} />
        </div>
        <div className="col-md-4">
          <Notes />
        </div>
      </div>
    )
  }

  const mapStateToProps = (state, all) => {
    return {
      isFetching: getIsFetching(state),
      errorMessage: getErrorMessage(state),
      repos: getUserRepos(state),
      bio: getUserBio(state)
    }
  }

  return connect(
    mapStateToProps
  )(profile); 
}
