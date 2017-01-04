const initialState = {
  type: '', 
  username: '' 
}

export default function profile(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_PROFILE':
      return {
        type: action.type, 
        username: action.username
       }
    case 'RECEIVE_PROFILE': 
      return { 
        type: action.type,
        username: action.username,
        data: action.data 
      }

    default:
      return state;
  }
}