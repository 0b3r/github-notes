export default React => ({ children }) => (
  <div className="main-container">
    <nav className="navbar navbar-default" role="navigation">
      <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
        MENU
      </div>
    </nav>
    <div className="container">
      { children }
    </div>
  </div> 
)
