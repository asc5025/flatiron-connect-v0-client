import _ from 'lodash';
import { FETCH_MESSAGES } from '../actions/types';


export default (state = {}, action) => {
  switch (action.type) {
    // case SEND_MESSAGE:
    //   return { ...state, [action.payload.id]: action.payload }
    case FETCH_MESSAGES:
      return {..._.mapKeys(action.payload, 'id')}
    default:
      return state
  }
}
