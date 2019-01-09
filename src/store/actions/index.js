import { base } from '../../apis/users';
import { AUTH_USER, AUTH_ERROR, CURRENT_USER, RESET_ID } from './types';

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await base.post('/api/v1/users', formProps)

    dispatch({ type: AUTH_USER, payload: response.data.jwt })
    dispatch({ type: CURRENT_USER, payload: response.data.user.id })
    localStorage.setItem('token', response.data.jwt)
    // using localStorage (built into the broswer)
    callback()
    // callback to history push user to the feature page after successful signup
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Email in use" })
  }
}

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await base.post('/api/v1/login', formProps)
    console.log(response);

    dispatch({ type: AUTH_USER, payload: response.data.jwt })
    dispatch({ type: CURRENT_USER, payload: response.data.user })
    localStorage.setItem('token', response.data.jwt)
    // using localStorage (built into the broswer)
    callback()
    // callback to history push user to the feature page after successful signin
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid login credentials" })
  }
}

export const fetchCurrentUser = () => async dispatch => {
  let config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}
  }
    const response = await base.get('/api/v1/profile', config)
    dispatch(setCurrentUser(response.data.user))
}

export const setCurrentUser = (userData) => ({
  type: CURRENT_USER,
  payload: userData
})

export const signout = () => {
  localStorage.removeItem('token')

  return {
    type: AUTH_USER,
    payload: ''
  }
}

export const clearId = () => {
  return {
    type: RESET_ID
  }
}
