import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './authReducer';
import users from './usersReducer';

export default combineReducers({
  auth,
  users,
  form: formReducer
})
