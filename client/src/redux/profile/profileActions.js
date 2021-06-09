import {
    FETCH_PROFILE_REQUEST, 
    FETCH_PROFILE_SUCCESS, 
    FETCH_PROFILE_FAILURE
} from '../types';
import {HOST} from '../../hostname';

const URL = HOST + '/profiles';
const OPTIONS = {
  method: 'GET',
  credentials: 'include'
};

export const fetchProfile = () => {
  return (dispatch) => {
    dispatch(fetchProfileRequest())
    fetch(URL, OPTIONS)
      .then(res => res.json())
      .then(response => {
        const profile = response
        dispatch(fetchProfileSuccess(profile))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchProfileFailure(error.message))
      })
  }
}

export const fetchProfileRequest = () => {
    return {
        type: FETCH_PROFILE_REQUEST
    }
}

export const fetchProfileSuccess = profile => {
    return {
        type: FETCH_PROFILE_SUCCESS,
        payload: profile
    }
}

export const fetchProfileFailure = error => {
    return {
        type: FETCH_PROFILE_FAILURE,
        payload: error
    }
}