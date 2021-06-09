import {
    FETCH_PROFILE_REQUEST, 
    FETCH_PROFILE_SUCCESS, 
    FETCH_PROFILE_FAILURE
} from '../types';

const initialState={
    loading: true,
    profile: {},
    error: ''
};

const profileReducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCH_PROFILE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_PROFILE_SUCCESS:
            return {
                profile: action.payload,
                loading: false,
                error: ''
            }
        case FETCH_PROFILE_FAILURE:
            return {
                profile: {},
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default profileReducer;