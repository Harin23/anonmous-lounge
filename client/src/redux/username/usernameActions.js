import {SET_USERNAME_REQUEST, SET_USERNAME_SUCCESS, SET_USERNAME_FAILURE} from '../types';
import {registerNewuser} from '../../controller/socketController';

export const setUsername = (username) => {
  return (dispatch) => {
    dispatch(setUsernameRequest());
    registerNewuser(username)
    .then((username)=>dispatch(setUsernameSuccess(username)))
    .catch((err)=>dispatch(setUsernameFailure(err)))
  }
}

export const setUsernameRequest = () => {
  return {
      type: SET_USERNAME_REQUEST
  }
}

export const setUsernameSuccess = username => {
  return {
      type: SET_USERNAME_SUCCESS,
      payload: username
  }
}

export const setUsernameFailure = error => {
  return {
      type: SET_USERNAME_FAILURE,
      payload: error
  }
}