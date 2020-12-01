import {
  FETCH_NEW_STATE_REQUEST,
  FETCH_NEW_STATE_SUCCESS,
  FETCH_NEW_STATE_FAILED
  } from './newStateTypes';

  const initialState = { 
    loading: false,
    successful: false,
    data: null,
    error: false,
    errorMessage: ""
  };
  
  const newStateReducer = (state= initialState, action) => {
    
    switch (action.type) {
      case FETCH_NEW_STATE_REQUEST:
        return {
          ...initialState,
          loading: true,
        };
      case FETCH_NEW_STATE_SUCCESS:
        return {
          ...state,
          loading: false,
          successful: true,
          data: action.payload
        };
      case FETCH_NEW_STATE_FAILED:
        return {
          ...state,
          loading: false,
          successful: false,
          error: true,
          errorMessage: action.payload
        };
      default:
        return state;
    }
  }
  
  export default newStateReducer
  