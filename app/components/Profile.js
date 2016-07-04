import createRepos from './Github/Repos';
import createUserProfile from './Github/UserProfile';
import createNotes from './Notes/Notes';

export default React => {

  const Repos = createRepos(React);
  const UserProfile = createUserProfile(React);
  const Notes = createNotes(React);

  const profile = ({ ...state }) => {

    console.log(state);

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

  profile.getInitialState = () => {
    return {
      notes: [],
      bio: {
        name: 'Justin Ober'
      },
      repos: []
    }
  }

  return profile;
}



