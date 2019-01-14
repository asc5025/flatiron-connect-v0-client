import { SEND_MESSAGE } from '../actions/types';


export default (state = {}, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return { ...state, [action.payload.id]: action.payload }
    default:
      return state
  }
}
