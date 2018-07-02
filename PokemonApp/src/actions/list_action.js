// //define type of action
// export const POKEMON_LIST = 'POKEMON_LIST';
//
// //function which makes action Object
//
// export function pokemonListAction(mPokemonList) {
//     // make fetch request
//
//     fetch('https://pokeapi.co/api/v2/pokemon/')
//         .then(res => res.json() )
//         .then( (myJson) => {
//         console.log("JSON", myJson.results);
//         console.log("this", this.setState);
//         this.setState({PokemonList: myJson.results})
//     })
//
//   return {
//     type: POKEMON_LIST,
//     payload: { mPokemonList }
//   }
// }

export const FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

//
// export const fetchPokemonsSuccess = results => ({
//   type: FETCH_POKEMONS_SUCCESS,
//   payload: { mPokemonList }
// });

// export const fetchProductsBegin = () => ({
//   type: FETCH_PRODUCTS_BEGIN
// });
//
// export const fetchProductsError = error => ({
//   type: FETCH_PRODUCTS_FAILURE,
//   payload: { error }
// });

// export function fetchPokemons() {
//     // return dispatch => {
//     //     dispatch(fetchProductsBegin());
//     return fetch('http://localhost:3000/')
//         .then(res => {console.log("RES",res);res.json()}) //transform the data into json
//         // .then(json => {
//         //
//         //     console.log("JSON", json.results)
//         //     mPokemonList = json.results
//         //     console.log('LENGTH', mPokemonList.length)
//         //     return {
//         //         type: FETCH_POKEMONS_SUCCESS,
//         //         payload: { mPokemonList, isLoading: false }
//         // }})
//         .catch( (err) => {
//             // alert(err.message)
//             console.log("YO",err)
//             return {
//                 type: FETCH_PRODUCTS_FAILURE,
//                 payload: { isLoading: false, isShowing: true }
//         }})
// }

export function fetchPokemons() {
    return fetch('http://localhost:3000/')
                .then((res) => {
                    return res.json()
                })
                .then(json => {
                    console.log("JSON", json)
                    json.sort(function (a, b) {
                              return a.id - b.id;
                              });
                    return json
                })
                .then(jsonfiltered => {
                    mPokemonList = jsonfiltered
                    // console.log('LENGTH', mPokemonList.length)
                    return {
                        type: FETCH_POKEMONS_SUCCESS,
                        payload: { mPokemonList, isLoading: false }
                    }
                })

                .catch( (err) => {
                    // alert(err.message)
                    // console.log("YO",err)
                    return {
                        type: FETCH_PRODUCTS_FAILURE,
                        payload: { isLoading: false, isShowing: true }
        }})
}
