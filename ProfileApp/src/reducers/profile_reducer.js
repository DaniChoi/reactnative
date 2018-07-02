const DEFAULT_STATE = {
    mName: 'Daeun Choi',
    mEmail: 'Your Email',
    mOccupation: 'Software Engineer',
    mFriendList: [
        {
            "key":"0",
            "name": 'Bobby Joe',
            "occupation": 'UX/UI designers',
            "image": "https://occ-0-1001-999.1.nflxso.net/art/f1f35/e6090cf4726b99b0337594b255de8acb459f1f35.jpg"
        }
    ]
  }
// Reducer takes two parameters(state and action) to make a new object and returns it
// We don't mutate the state. We create a copy with Object.assign().
const changeNameReducer = (state, action) => {
    let newState = {};
    Object.assign(newState, state, action.payload );
    return newState;
}


// Function to update list

const updateFriendList = (state, action) => {
  let newState = {};

  newFriend = {
        "key": action.payload.mFriendList.length.toString(), //which is 1 for the current state
        "name": action.payload.name,
        "occupation":action.payload.occupation,
        "image": "https://occ-0-1001-999.1.nflxso.net/art/f1f35/e6090cf4726b99b0337594b255de8acb459f1f35.jpg"
  }
  action.payload.mFriendList.push(newFriend)
  mFriendList = action.payload.mFriendList

  Object.assign(newState, state, {mFriendList} );
  console.log("New State", newState.mFriendList )
  return newState;
}

  export default function (state = DEFAULT_STATE, action) {
      // ADD new case
    switch (action.type) {
      case 'CHANGE_NAME':
            return changeNameReducer(state, action);
      case 'UPDATE_LIST':
            return updateFriendList(state, action);
    default:
        return state;
        //We return the previous state in the default case.

  }
}
