import {
  CHECK_AUTH_REQUEST,
  CHECK_AUTH_SUCCESS,
  CHECK_AUTH_FAILED
  } from './authTypes';

  const initialState = { 
    loading: true,
    token: null,
    success: false,
    error: false,
    errorMessage: ""
  };
  
  const authReducer = (state= initialState, action) => {
    
    switch (action.type) {
      case CHECK_AUTH_REQUEST:
        return {
          ...initialState,
          loading: true
        };
      case CHECK_AUTH_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          token: action.payload
        };
      case CHECK_AUTH_FAILED:
        return {
          ...initialState,
          loading: false,
          error: true,
          errorMessage: action.payload
        };
      default:
        return state;
    }
  }
  
  export default authReducer
  