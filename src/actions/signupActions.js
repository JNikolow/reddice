import axios from 'axios';

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post('/users', userData);
  }
}

export function isUserExists(identifier) {
  return dispatch => {
    return axios.get(`/users/${identifier}`);
  }
}