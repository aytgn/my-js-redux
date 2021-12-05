//STORE
class Store {
  //Store needs: STATE,REDUCER,DISPATCH
  //Store instance needs: initialState and it's reducer
  constructor(initialState, reducer) {
    this._state = initialState;
    this._reducer = reducer;
  }
  //state, number of products
  _state;
  //reducer, given reducer
  _reducer;
  //dispatch, update state, by given action with reducer.
  dispatch = (action) => {
    this._state = this._reducer(this._state, action);
  };
  //get state
  getState = () => {
    return this._state;
  };
}
//myAction to add some number to state
const myAction = { type: "ADD", payload: 10 };
//myReducer, which make calculations based on actions and currentState
const myReducer = (state, action) => {
  //state value will be given by store, action will be given by dispatch
  switch (action.type) {
    case "ADD":
      return state + action.payload;
    default:
      return state;
  }
};
//create store instance, with initialState 10 and myReducer
const store = new Store(10, myReducer);
//let's apply myAction
store.dispatch(myAction);
//show result
console.log(store.getState());
