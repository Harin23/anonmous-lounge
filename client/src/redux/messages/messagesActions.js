import {
    GET_MESSAGE 
} from '../types'; 
  
export const getMessage = message => {
    return {
        type: GET_MESSAGE,
        payload: message
    }
}