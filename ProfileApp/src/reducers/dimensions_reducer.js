const DEFAULT_STATE = {
    mWidth: '',
    mHeight: '',
  }

// Reducer takes two parameters(state and action) to make a new object and returns it
// We don't mutate the state. We create a copy with Object.assign().
const updateStyleDimensions = (state, action) => {
    let newState = {};
    console.log( "CURRENT STATE", action.payload )

    Object.assign(newState, state, action.payload );
    console.log ("NEWSTATE", newState)
    return newState;
}


  export default function (state = DEFAULT_STATE, action) {
      // ADD new case
    switch (action.type) {
      case 'STYLE_DIMENSIONS':
            return updateStyleDimensions(state, action);
    default:
        return state;
        //We return the previous state in the default case.

  }
}
