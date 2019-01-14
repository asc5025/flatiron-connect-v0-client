import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './authReducer';
import users from './usersReducer';
import convo from './convoReducer';
import messages from './messageReducer';

export default combineReducers({
  auth,
  users,
  convo,
  messages,
  form: formReducer
})
