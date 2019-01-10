import _ from 'lodash';
import { FETCH_USERS, EDIT_PROFILE } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, ..._.mapKeys(action.payload, 'id') }
    case EDIT_PROFILE:
      return { ...state, [action.payload.id]: action.payload }
    default:
      return state
  }
}
