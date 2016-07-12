export default React => ({
  avatar_url, name, login, email,
  location, company, followers, following,
  public_repos, blog, bio
}) => (
  <div>
    <h3>User Biography</h3>
    <ul className="list-group">
      {
        avatar_url && 
        <li className="list-group-item">
          <img src={avatar_url} className="img-responsive" />
        </li>
      }
      {
        name && 
        <li className="list-group-item">
          Name: {name}
        </li>
      }
      {
        login && 
        <li className="list-group-item">
          Username: {login}
        </li>
      }
      {
        email && 
        <li className="list-group-item">
          Email: {email}
        </li>
      }
      {
        location && 
        <li className="list-group-item">
          Location: {location}
        </li>
      }
      {
        company && 
        <li className="list-group-item">
          Company: {company}
        </li>
      }
      {
        <li className="list-group-item">
          Followers: {followers}
        </li>
      }
      {
        <li className="list-group-item">
          Following: {following}
        </li>
      }
      {
        <li className="list-group-item">
          Public Repos: {public_repos}
        </li>
      }
      {
        blog && 
        <li className="list-group-item">
          Blog: {blog}
        </li>
      }
      {
        bio && 
        <li className="list-group-item">
          Bio: {bio}
        </li>
      }
    </ul>
  </div>
);

