export const CHANGE_FIRST_NAME = 'CHANGE_FIRST_NAME';


export function changeFirstNameAction(mFirstName) {
  return {
    type: CHANGE_FIRST_NAME,
    payload: {mFirstName}
  }
}
