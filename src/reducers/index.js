import { combineReducers } from 'redux';

import AuthReducer from  './AuthReducer';
import UsersReducer from './UsersReducer';
import ProfileReducer from './ProfileReducer';

export default combineReducers({
  auth: AuthReducer,
  users: UsersReducer,
  user: ProfileReducer,
});