import { combineReducers } from 'redux';
import usernameReducer from './username/usernameReducer';
import usersReducer from './users/usersReducer'

export default combineReducers({
    username: usernameReducer,
    users: usersReducer
});