import fetch from 'isomorphic-fetch';

export const REQUEST_PROFILE = 'REQUEST_PROFILE';
function requestProfile(username) {
  return {
    type: REQUEST_PROFILE,
    username
  }
}

export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
function receiveProfile(username, json) {
  return {
    type: RECEIVE_PROFILE, 
    username, 
    data: json
  }
}

export function fetchProfile(username) {
  return function(dispatch) {
    dispatch(requestProfile(username));

    return fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(json => 
        dispatch(receiveProfile(username, json))
      )
  }
}
