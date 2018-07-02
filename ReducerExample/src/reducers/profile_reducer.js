const DEFAULT_STATE = {
    mFirstName: 'Default Name',
    mLastName: 'Default Name'
  }
  
  const changeFirstNameReducer = (state, action) => {
    let newState = {};
    Object.assign(newState, state, action.payload );
    return newState;
  }
  
  export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
      case 'CHANGE_FIRST_NAME':
        return changeFirstNameReducer(state, action);
      default:
        return state;
    }
  }