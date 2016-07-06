import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import createMain from './Main';
import createHome from './Home';
import createProfile from './Profile';


export default React => {

  const { PropTypes } = React;
  const Main = createMain(React);
  const Home = createHome(React);
  const Profile = createProfile(React);


  const Root = ({ store }) => {
    //console.log(store.getState());
    return (
      <Provider store={store}>
         <Router history={browserHistory}>
           <Route path="/" component={ Main }>
             <Route path="profile/:username" component={ Profile } />
             <IndexRoute component={ Home } /> 
           </Route>
         </Router>
       </Provider>
    )
  }

  Root.propTypes = {
    store: PropTypes.object.isRequired,
  };

  return Root;

}




