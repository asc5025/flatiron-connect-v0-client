import { AUTH_USER, AUTH_ERROR, CURRENT_USER, RESET_ID } from '../actions/types';

const INITIAL_STATE = {
  token: '',
  errorMessage: '',
  currentUser: '',
  loggedIn: false

}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, token: action.payload }
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload }
    case CURRENT_USER:
      return { ...state, token: localStorage.getItem('token'), currentUser: action.payload, loggedIn: true }
    case RESET_ID:
      return { ...state, currentUser: '', loggedIn: false }
    default:
      return state
  }
}
