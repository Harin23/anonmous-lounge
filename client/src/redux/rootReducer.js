import { combineReducers } from 'redux';
import usersReducer from './users/usersReducer';
import messagesReducer from './messages/messagesReducer';

export default combineReducers({
    users: usersReducer,
    messages: messagesReducer
});