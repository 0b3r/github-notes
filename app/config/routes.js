import createMain from '../components/Main';
import createHome from '../components/Home';

export default (React, Route, IndexRoute) => () => {

  const Main = createMain(React);
  const Home = createHome(React);

  return (
    <Route path="/" component={ Main }>
      <IndexRoute component={ Home } /> 
    </Route>
  )

}
