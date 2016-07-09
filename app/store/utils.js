const leaveState = (state) => state;

export default (state, {type, ...data} = {}, reducers) => {
  const reducer = reducers[type] || leaveState;
  return reducer(state, data);
}