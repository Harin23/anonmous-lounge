import {
    GET_MESSAGE 
} from '../types'; 

const initialState=[];

const messagesReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_MESSAGE:
            return [...state, action.payload];
        default:
            return state;
    }
}
export default messagesReducer;