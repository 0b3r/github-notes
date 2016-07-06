import createSearchGithub from './SearchGithub';

export default React => {

  const SearchGithub = createSearchGithub(React);

  const Main = ({ children }) => (
    <div className="main-container">
      <nav className="navbar navbar-default" role="navigation">
        <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
          <SearchGithub />
        </div>
      </nav>
      <div className="container">
        { children }
      </div>
    </div> 
  )


  return Main;

}