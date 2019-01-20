import _ from 'lodash';
import { FETCH_CONVOS, ACTIVE_CONVO, SEND_MESSAGE } from '../actions/types';

const initalState = {
  conversations: {},
  activeConvo: {}
}


export default (state = initalState, action) => {
  switch (action.type) {
    case FETCH_CONVOS:
      return { ...state, conversations: {..._.mapKeys(action.payload, 'id') } }
    // case CREATE_CONVO:
    //   return { ...state, [action.payload.id]: action.payload, activeConvo: action.payload.id }
    case ACTIVE_CONVO:
      return { ...state, activeConvo: action.payload }
    case SEND_MESSAGE:
      // debugger
      return {...state, conversations: {...state.conversations, [action.payload.conversation_id]: {...state.conversations[action.payload.conversation_id], messages: [...state.conversations[action.payload.conversation_id].messages, action.payload]
}}}
    default:
      return state;
  }
}
