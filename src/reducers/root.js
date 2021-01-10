import { combineReducers } from 'redux';
import authUser from '../reducers/user/authUser';
import questions from '../reducers/questions';
import users from '../reducers/user/user';

export default combineReducers({
  authUser,
  questions,
  users
});
