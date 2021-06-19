import {
    GET_USERS
} from '../types';

const initialState={
    users: [], 
    tabStatus: true
};

const usersReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_USERS:
            return {
                users: action.payload
            }
        default:
            return state;
    }
}

export default usersReducer;