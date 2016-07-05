import createMain from '../components/Main';
import createHome from '../components/Home';
import createProfile from '../components/Profile';

export default (React, Route, IndexRoute, store) => () => {

  const Main = createMain(React);
  const Home = createHome(React);
  const Profile = createProfile(React);

  const state = store.getState();

  console.log(state);

  return (
    <Route path="/" component={ Main }>
      <Route path="profile/:username" component={ Profile } { ...state } />
      <IndexRoute component={ Home } /> 
    </Route>
  )

}
