import {SET_USERNAME_REQUEST, SET_USERNAME_SUCCESS, SET_USERNAME_FAILURE} from '../types';

const initialState={
    loading: false,
    username: {},
    error: '',
    saved: false
};

const usernameReducer=(state=initialState, action)=>{
    switch(action.type){
        case SET_USERNAME_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SET_USERNAME_SUCCESS:
            return {
                username: action.payload,
                loading: false,
                error: '',
                saved: true
            }
        case SET_USERNAME_FAILURE:
            return {
                username: {},
                loading: false,
                saved: false,
                error: action.payload
            }
        default:
            return state;
    };
}

export default usernameReducer;