import {
    GET_USERS_REQUEST, 
    GET_USERS_SUCCESS, 
    GET_USERS_FAILURE
} from '../types';
import {HOSTNAME} from '../../utils/host'; 

const URL = HOSTNAME + '/users';
const OPTIONS = {
  method: 'GET',
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(getUsersRequest())
    fetch(URL, OPTIONS)
      .then(res => res.json())
      .then(response => {
        const users = response
        dispatch(getUsersSuccess(users))
      })
      .catch(error => {
        dispatch(getUsersFailure(error))
      })
  }
}

export const getUsersRequest = () => {
  return {
      type: GET_USERS_REQUEST
  }
}

export const getUsersSuccess = users => {
  return {
      type: GET_USERS_SUCCESS,
      payload: users
  }
}

export const getUsersFailure = error => {
  return {
      type: GET_USERS_FAILURE,
      payload: error
  }
}