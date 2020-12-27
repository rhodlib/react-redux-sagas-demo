import { combineReducers } from 'redux';

import counterReducer, {NAME as counterName} from '../features/counter'; //DUCKS!!!

export default () => combineReducers({
    [counterName]: counterReducer
});