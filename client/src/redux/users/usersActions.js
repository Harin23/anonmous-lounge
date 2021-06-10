import {
    GET_USERS_SUCCESS
} from '../types';

export const getUsersSuccess = users => {
  return {
      type: GET_USERS_SUCCESS,
      payload: users
  }
}