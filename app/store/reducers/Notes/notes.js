const assign = Object.assign;
const initalState = {
  firstName: 'Justin',
  lastName: 'Ober',
  age: 28
}

export default ( 
  state = initalState, 
  { firstName, lastName, age, type } = {} 
) => {
  switch (type) {
    case 'SET_FIRST_NAME':
      return assign({}, state, {
        firstName
      });
    case 'SET_LAST_NAME':
      return assign({}, state, {
        lastName
      });
    case 'SET_AGE':
      return assign ({}, state, {
        age
      });
    default:
      return state;
  }
};