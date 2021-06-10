import {
    GET_USERS_REQUEST, 
    GET_USERS_SUCCESS, 
    GET_USERS_FAILURE
} from '../types';

const initialState={
    loading: false,
    users: [],
    error: '',
    loaded: false
};

const usersReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_USERS_SUCCESS:
            return {
                users: action.payload,
                loading: false,
                error: ''
            }
        case GET_USERS_FAILURE:
            return {
                users: {},
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default usersReducer;