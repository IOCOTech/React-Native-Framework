import {combineReducers} from 'redux';
import { newStateReducer } from './newState/newStateReducer';

export default combineReducers({
    newState: newStateReducer,
  });