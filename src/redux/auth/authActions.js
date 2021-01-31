// constants
import LOG_TYPE  from "../../constants/testConstants";
// log
import { good, bad } from "../../utils/testUtills";


import {
  CHECK_AUTH_REQUEST,
  CHECK_AUTH_SUCCESS,
  CHECK_AUTH_FAILED
  } from './authTypes';


const checkAuthRequest = () => {
  return {
    type: CHECK_AUTH_REQUEST
  }
}

const checkAuthSuccess = (payload) => {
  return {
    type: CHECK_AUTH_SUCCESS,
    payload: payload
  }
}

const checkAuthFailed = (payload) => {
  return {
    type: CHECK_AUTH_FAILED,
    payload: payload
  }
}

export const checkAuth = (success) => {
  return (dispatch) => {
    dispatch(checkAuthRequest());
    if(success) {
      dispatch(checkAuthSuccess("1234"));
      good(LOG_TYPE.REDUX, `REDUX SUCCESSFUL ======> /state: auth/ /file: authActions.js login/`);
    }
    else {
      dispatch(checkAuthFailed("Can not login"));
      bad(LOG_TYPE.REDUX, `REDUX SUCCESSFUL ======> /state: auth/ /file: authActions.js login/`);
    }
  }
};

