import createMain from '../components/Main';
import createHome from '../components/Home';
import createProfile from '../components/Profile';

export default (React, Route, IndexRoute) => () => {

  const Main = createMain(React);
  const Home = createHome(React);
  const Profile = createProfile(React);

  return (
    <Route path="/" component={ Main }>
      <Route path="profile/:username" component={ Profile } />
      <IndexRoute component={ Home } /> 
    </Route>
  )

}
