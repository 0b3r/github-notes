export default React => ({ name, description, html_url }) => (
  <li className="list-group-item">
    { 
      html_url && 
      <h4>
        <a target="_blank" href={html_url}>
          { name }
        </a>
      </h4> 
    }
    {
      description &&
      <p>{ description }</p>
    }
  </li>
);