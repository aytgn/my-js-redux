//STORE
class Store {
  //Needed to create instance: Initial state and reducer
  constructor(initialState, reducer) {
    this.numberOfProducts = initialState; // this is our state
    this.reducer = reducer;
  }
  //state, number of products
  numberOfProducts;
  //reducer, calculator
  reducer;
  //dispatch, updating state base reducer's actions
  dispatch = (action) => {
    this.numberOfProducts = this.reducer(this.numberOfProducts, action);
  };
}
//create a reducer, which will do calculations based on type of actions and action's payloads.
//reducer needs "current state" to do calculations.
let reducer = (currentState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return action.payload + currentState;
    default:
      return currentState;
  }
};
//generate new Store instance, with our reducer and 10 products!
let store = new Store(10, reducer);
//TEST
console.log("before: ", store.numberOfProducts);
//let's add 10 product
store.dispatch({ type: "ADD_PRODUCT", payload: 10 });
console.log("after: ", store.numberOfProducts);
