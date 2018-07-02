const DEFAULT_STATE = {
    mName: 'Your Name',
    mEmail: 'Your Email'
  }
// Reducer takes two parameters(state and action) to make a new object and returns it
// We don't mutate the state. We create a copy with Object.assign().
  const changeNameReducer = (state, action) => {
    let newState = {};
    Object.assign(newState, state, action.payload );
    return newState;
  }



  export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
      case 'CHANGE_NAME':
        return changeNameReducer(state, action);
      default:
        return state;
        //We return the previous state in the default case.

  }
}
