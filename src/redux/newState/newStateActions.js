// react
import AsyncStorage from '@react-native-community/async-storage';
// redux store
import store from "../store";

import {
  FETCH_NEW_STATE_REQUEST,
  FETCH_NEW_STATE_SUCCESS,
  FETCH_NEW_STATE_FAILED
  } from './newStateTypes';


 const fetchActionRequest = () => {
  return {
    type: FETCH_NEW_STATE_REQUEST
  }
}

const fetchActionSuccess = (payload) => {
  return {
    type: FETCH_NEW_STATE_SUCCESS,
    payload: payload
  }
}

const fetchActionFailed = (error) => {
  return {
    type: FETCH_NEW_STATE_FAILED,
    payload: error
  }
}

export const newStateAction = () => {
  return (dispatch) => {
    dispatch(fetchActionRequest());
    dispatch(fetchActionSuccess());
    dispatch(fetchActionFailed());
  }
  };
