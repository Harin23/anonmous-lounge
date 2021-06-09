import { combineReducers } from 'redux';
import usernameReducer from './username/usernameReducer';


export default combineReducers({
    username: usernameReducer
});