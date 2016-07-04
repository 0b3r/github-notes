export default React => {

  const profile = ({ params }) => (
    <div className="row">
      <div className="col-md-4">
        User Profile Component ---> { params.username }
      </div>
      <div className="col-md-4">
        Repos Component
      </div>
      <div className="col-md-4">
        Notes Component
      </div>
    </div>
  )

  profile.getInitialState = () => {
    return {
      notes: [],
      bio: {},
      repos: []
    }
  }

  return profile;
}