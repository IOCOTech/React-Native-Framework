// constants
import LOG_TYPE  from "../../constants/testConstants";
// log
import { good  } from "../../utils/testUtills";
// theme
import { appTheme } from "../../../styles/theme";

import {
  SET_APP_THEME,
  } from './themeTypes';


const setAppThemeRequest = (payload) => {
  return {
    type: SET_APP_THEME,
    payload: payload
  }
}

export const setAppTheme = (theme) => {
  return (dispatch) => {
      let newTheme = appTheme(theme);
      dispatch(setAppThemeRequest(newTheme));
      good(LOG_TYPE.REDUX, `REDUX SUCCESSFUL ======> /state: theme/ /file: themeActions.js themeActions/`);
    }
};

