import { combineReducers } from 'redux';
import profile from './profile_reducer';
import dimensions from './dimensions_reducer';


const rootReducer = combineReducers({
    profile,
    dimensions
})

export default rootReducer
