import {
    GET_MESSAGE 
} from '../types'; 

const initialState={
    messages: []
};

const messagesReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_MESSAGE:
            return {
                messages: state.messages.push(action.payload)
            };
        default:
            return state;
    }
}
export default messagesReducer;