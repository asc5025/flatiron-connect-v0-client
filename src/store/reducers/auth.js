import { AUTH_USER, AUTH_ERROR, CURRENT_USER, RESET_ID } from '../actions/types';

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: '',
  currentUser: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: action.payload }
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload }
    case CURRENT_USER:
      return { ...state, currentUser: action.payload }
    case RESET_ID:
      return { ...state, currentUser: action.payload }
    default:
      return state
  }
}
