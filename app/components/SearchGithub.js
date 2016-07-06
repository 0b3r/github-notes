import { History } from 'react-router';

export default React => {

  const SearchGithub = ({ dispatch }) => {

    let input;

    const handleSubmit = e => {
      e.preventDefault();
      if(!input.value.trim()){
        return;
      }
      //dispatch(updateUsername(input.value));
      console.log(input.value);
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

  SearchGithub.mixins = [History];

  return SearchGithub;
}