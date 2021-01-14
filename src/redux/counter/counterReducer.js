import {
  ADD_TO_COUNT,
  REMOVE_FROM_COUNT,
  } from './counterTypes';

  const initialState = { 
    count: 0,
  };
  
  const countReducer = (state= initialState, action) => {
    
    switch (action.type) {
      case ADD_TO_COUNT:
        return {
          ...state,
          count: state.count + 1,
        };
      case REMOVE_FROM_COUNT:
        return {
          ...state,
          count: state.count - 1,
        };
      default:
        return state;
    }
  }
  
  export default countReducer
  