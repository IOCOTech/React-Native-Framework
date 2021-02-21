import {combineReducers} from 'redux';
import counterReducer from './counter/CounterReducer';
import authReducer from './auth/AuthReducer';

export default combineReducers({
  auth: authReducer,
  counter: counterReducer,
});
