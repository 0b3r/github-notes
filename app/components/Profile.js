import createRepos from './Github/Repos';
import createUserProfile from './Github/UserProfile';
import createNotes from './Notes/Notes';
import ReactFireMixin from 'reactfire';

export default (React) => {

  const Repos = createRepos(React);
  const UserProfile = createUserProfile(React);
  const Notes = createNotes(React);

  const profile = ({route: {bio, repos, notes}}) => {
    console.log(bio);
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile { ...bio } />
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

  return profile;
}
