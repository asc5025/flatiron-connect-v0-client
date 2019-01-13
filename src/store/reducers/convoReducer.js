import _ from 'lodash';
import { FETCH_CONVOS, CREATE_CONVO, ACTIVE_CONVO } from '../actions/types';

// const INITIAL_STATE = {
//   conversations: null,
//   senderId: null,
//   recieverId: null,
//   convoId: null,
//   convoStart: false
// }

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CONVOS:
      return { ...state, ..._.mapKeys(action.payload, 'id') }
    case CREATE_CONVO:
      return { ...state, [action.payload.id]: action.payload, activeConvo: action.payload.id }
    case ACTIVE_CONVO:
      return { ...state, activeConvo: action.payload }
    default:
      return state;
  }
}
