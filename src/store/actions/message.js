import { base } from '../../apis/users';
import { SEND_MESSAGE } from './types';

export const sendMessage = (id, values) => async dispatch => {
  const response = await base.post(`/api/v1/conversations/${id}/messages`, values)
  debugger
  dispatch({ type: SEND_MESSAGE, payload: response.data.message })
}
