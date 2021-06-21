import {
    GET_USERS
} from '../types';

const initialState={
    users: [], 
    tabStatus: true
};

let array=[]
for(let i=0; i<80; i++){
    array[i]=i
};

initialState.users = array;

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