import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './authReducer';
import users from './usersReducer';
import convo from './convoReducer';

export default combineReducers({
  auth,
  users,
  convo,
  form: formReducer
})
