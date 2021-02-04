import {combineReducers} from 'redux';
import counterReducer from './counter/counterReducer';
import authReducer from "./auth/authReducer";
import themeReducer from "./theme/themeReducer";

export default combineReducers({
    theme: themeReducer,
    auth: authReducer,
    counter: counterReducer,
  });