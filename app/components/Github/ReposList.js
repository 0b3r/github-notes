import createRepoItem from './RepoItem';

export default React => {

  const RepoItem = createRepoItem(React);


  const repoList = ({ repos }) => {

    console.log(repos);
    return (
      <ul>
        {repos.map(repo =>
          <RepoItem 
            key={repo.id}
            {...repo}
          />
        )}
      </ul>
    )    
  }

  return repoList;

} 