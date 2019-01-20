import { base } from '../../apis/users';
import { SEND_MESSAGE, FETCH_MESSAGES } from './types';

export const sendMessage = values => dispatch => {
  // const response = await base.post(`/api/v1/convos/msg`, values)
   base.post(`/api/v1/convos/msg`, values)
  // debugger
  // dispatch({ type: SEND_MESSAGE, payload: response.data })
}

export const sendNewMessage = (id, values) => dispatch => {
  // const response = await base.post(`/api/v1/conversations/${id}/messages`, values)
  base.post(`/api/v1/conversations/${id}/messages`, values)
  // dispatch({ type: SEND_MESSAGE, payload: response.data })
}

export const fetchMessages = id => async dispatch => {
  const response = await base.get(`/api/v1/conversations/${id}/messages`)
  dispatch({ type: FETCH_MESSAGES, payload: response.data })
}

export const actionCableMsg = response => {
  return {
    type: SEND_MESSAGE,
    payload: response.message
  }
}
