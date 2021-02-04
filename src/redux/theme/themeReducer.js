import generic from "../../../styles/themes/generic";

import {
  SET_APP_THEME,
  } from './themeTypes';

  const initialState = generic;
  
  const themeReducer = (state= initialState, action) => {
    switch (action.type) {
      case SET_APP_THEME:
        return {
          ...action.payload
        };
      default:
        return state;
    }
  }
  
  export default themeReducer
  