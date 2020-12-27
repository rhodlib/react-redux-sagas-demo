import {createStructuredSelector} from 'reselect';

//Feature Name:
export const NAME = 'users';

//Action Types:
const LIST_TRY = "[users]/LIST_TRY";
const LIST_SUCCESS = "[users]/LIST_SUCCESS";
const LIST_FAILED = "[users]/LIST_FAILED";

//Initial State:
const initialState = {
    dataSource: [],
    isLoading: false
}

//Reducer:
export default (state = initialState, action = {}) => {
    switch(action.type){
        case actionTypes.LIST_TRY:
            return {...state, isLoading: true};
        case actionTypes.LIST_SUCCESS:
            return {...state, isLoading: false, dataSource: action.data};
        case actionTypes.LIST_FAILED:
            return {...state, isLoading: false};
        default:
            return state
    }
}

//--------------------------------
function list() {
    return {type: LIST_TRY}
}

export const actionCreators = {
    list
}
//--------------------------------
export const actionTypes = {
    LIST_TRY,
    LIST_SUCCESS,
    LIST_FAILED
}
//--------------------------------
const users = (state) => state[NAME];

export const selector = createStructuredSelector({
    users
})