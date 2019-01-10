import { base } from '../../apis/users';

import { FETCH_USERS } from './types';

export const fetchUsers = () => async dispatch => {
  const response = await base.get('/api/v1/users');
  dispatch({ type: FETCH_USERS, payload: response.data })
}
