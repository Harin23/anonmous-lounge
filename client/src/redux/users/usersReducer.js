import {
    GET_USERS_SUCCESS
} from '../types';

const initialState={
    users: []
};

const usersReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_USERS_SUCCESS:
            return {
                users: action.payload,
                loading: false,
                error: ''
            }
        default:
            return state;
    }
}

export default usersReducer;