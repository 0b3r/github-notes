import createRepoItem from './RepoItem';

export default React => {

  const RepoItem = createRepoItem(React);


  const repoList = ({ repos }) => {

    console.log(repos);
    return (
      <div>
        <h3>User Repositories</h3>
        <ul className="list-group">
          {repos.map(repo =>
            <RepoItem 
              key={repo.id}
              {...repo}
            />
          )}
        </ul>
      </div>
    )    
  }

  return repoList;

} 