//define type of action
export const CHANGE_NAME = 'CHANGE_NAME';
export const UPDATE_LIST = 'UPDATE_LIST';

//function which makes action Object

export function changeNameAction(mName, mEmail, mOccupation) {
  return {
    type: CHANGE_NAME,
    payload: {mName, mEmail, mOccupation}
  }
}


// Function to update list

export function updateFriendList(name, occupation, mFriendList) {
  return {
    type: UPDATE_LIST,
    payload: {name, occupation, mFriendList}
  }
}
