import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { searchUser } from '../store/actions';

export default React => {

  const SearchGithub = ({ dispatch }) => {

    let input;

    const handleSubmit = e => {
      e.preventDefault();
      if(!input.value.trim()){
        return;
      }
      dispatch(push(`/profile/${input.value}`));
      //dispatch(searchUser(input.value));
      input.value = '';
    }

    const setNode = node => { input = node; }

    return (
      <div className="col-sm-12">
        <form onSubmit={handleSubmit}>
          <div className="form-group col-sm-7">
            <input 
              type="text" 
              className="form-control" 
              ref={setNode} />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }

  SearchGithub.propTypes = {
    dispatch: React.PropTypes.func.isRequired
  };


  return connect()(SearchGithub);
}