//define type of action
export const CHANGE_NAME = 'CHANGE_NAME';

//function which makes action Object

export function changeNameAction(mName, mEmail) {
  return {
    type: CHANGE_NAME,
    payload: {mName, mEmail}
  }
}
