import { base } from '../../apis/users';
import { SEND_MESSAGE, FETCH_MESSAGES } from './types';

export const sendMessage = (id, values) => async dispatch => {
  const response = await base.post(`/api/v1/conversations/${id}/messages`, values)
  // debugger
  dispatch({ type: SEND_MESSAGE, payload: response.data.message })
}

export const fetchMessages = (id) => async dispatch => {
  const response = await base.get(`/api/v1/conversations/${id}/messages`)
  dispatch({ type: FETCH_MESSAGES, payload: response.data })
  // callback()
}

// export const fetchMessages = (id) => {
//   return (dispatch) => {
//     fetch(`http://localhost:3000/api/v1/conversations/${id}/messages`)
//       .then(res => res.json())
//       .then(json => {
//         return dispatch({ type: FETCH_MESSAGES, payload: json })
//       })
//   }
// }
