import axios from 'axios';

const fetchRepos = (username) => {
  return axios.get(`https://api.github.com/users/${username}/repos`);
}

const fetchUserInfo = (username) => {
  return axios.get(`https://api.github.com/users/${username}`);
}

export default username => axios.all([
    fetchRepos(username),
    fetchUserInfo(username)
  ]).then(
    ([{data: repos},{data: bio}]) => ({repos,bio})
  );
