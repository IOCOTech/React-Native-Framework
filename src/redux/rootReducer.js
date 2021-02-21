import {combineReducers} from 'redux';
import counterReducer from './counter/counterReducer';
import authReducer from './auth/authReducer';

export default combineReducers({
  auth: authReducer,
  counter: counterReducer,
});
