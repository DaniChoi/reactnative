import { combineReducers, applyMiddleware } from 'redux';
import pokemonList from './list_reducer';
import ReduxThunk from 'redux-thunk'


const rootReducer = combineReducers({
    pokemonList
})

export default rootReducer
