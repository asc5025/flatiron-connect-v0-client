import { base } from '../../apis/users';
import history from '../../history';

import { FETCH_USERS, EDIT_PROFILE } from './types';

export const fetchUsers = () => async dispatch => {
  const response = await base.get('/api/v1/users');
  dispatch({ type: FETCH_USERS, payload: response.data })
}

export const editProfile = (id, formValues) => async dispatch => {
  const response = await base.patch(`/api/v1/users/${id}`, formValues)
  debugger
  dispatch({ type: EDIT_PROFILE, payload: response.data })
  history.push('/')
}
