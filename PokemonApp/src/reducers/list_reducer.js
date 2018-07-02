const DEFAULT_STATE = {
    mPokemonList: [],
    isLoading: true,
    isShowing: false
};
// Reducer takes two parameters(state and action) to make a new object and returns it
// We don't mutate the state. We create a copy with Object.assign().
// const pokemonListReducer = (state, action) => {
//     let newState = {};
//     console.log("Action.Payload", action)
//     console.log("CURRENT STATE", state)
//     // newPokemonList = {
//     //     "key": action.payload.mPokemonList.length.toString(),
//     // }
//
//     // action.payload.mPokemonList.push(newPokemonList)
//     // mPokemonList = action.payload.mPokemonList
//
//     Object.assign(newState, state, action.payload );
//     console.log("New State", newState )
//     return newState;
// }


const pokemonListReducer = (state, action) => {
    let newState = {};
    // console.log("Action.Payload", action)
    // console.log("Current State", state)
    mPokemonList = action.payload.mPokemonList
    isLoading = action.payload.isLoading
    Object.assign(newState, state, {mPokemonList, isLoading} );
    // console.log("New State", newState)
    return newState;
}

const pokemonFailureReducer = (state, action) => {
    let newState = {};
    isLoading = action.payload.isLoading
    isShowing = action.payload.isShowing
    Object.assign(newState, state, { isLoading, isShowing } );
    console.log("Action.Payload", action.payload)
    console.log("Action.Payload", action)
    console.log("Current State", state)
    console.log("New State", newState)
    return newState;
}


export default function (state = DEFAULT_STATE, action) {
      // ADD new case
    switch (action.type) {

      case 'FETCH_POKEMONS_SUCCESS':
      return pokemonListReducer(state, action);
      //
      case 'FETCH_PRODUCTS_FAILURE':
      return pokemonFailureReducer(state,action);

    default:
        return state;
  }
}
