import { base } from '../../apis/users';
import { FETCH_CONVOS, ACTIVE_CONVO, DEACTIVATE_CONVO } from './types';



export const fetchConvos = () => async (dispatch) => {
  let config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}
  }
  const response = await base.get(`/api/v1/user/convos/`, config)
  dispatch({ type: FETCH_CONVOS, payload: response.data })
}


// export const fetchConvos = () => async dispatch => {
//   const response = await base.get('/api/v1/conversations')
//   dispatch({ type: FETCH_CONVOS, payload: response.data })
// }

// export const createConvo = (userId) => async (dispatch, getState) => {
//   const { id } = getState().auth.currentUser
//   const body = {
//     sender_id: id,
//     recipient_id: userId
//   }
//     const response = await base.post('/api/v1/conversations', body)
//     dispatch({ type: CREATE_CONVO, payload: response.data.conversation })
//     // debugger
//
// }

export const activeConvo = (convo) => ({ type: ACTIVE_CONVO, payload: convo })

export const deactivateConvo = () => ({ type: DEACTIVATE_CONVO })


// export const fetchConvo = id => async dispatch => {
//   debugger
//   const response = await base.get(`/api/v1/conversations/${id}`)
//   debugger
//   // dispatch({ type: START_CONVO, payload: response.data })
//   debugger
// }


// try {
//   const response = await axios.post('http://localhost:3090/signup', formProps)
//
//   dispatch({ type: AUTH_USER, payload: response.data.token })
//   localStorage.setItem('token', response.data.token)
//   // using localStorage (built into the broswer)
//   callback()
//   // callback to history push user to the feature page after successful signup
// } catch (e) {
//   dispatch({ type: AUTH_ERROR, payload: "Email in use" })
// }
// }
