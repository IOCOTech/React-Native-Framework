// constants
import LOG_TYPE from '../../constants/TestConstants';
// log
import {good, bad} from '../../utils/testUtills';

import {ADD_TO_COUNT, REMOVE_FROM_COUNT} from './CounterTypes';

const addToCount = () => {
  return {
    type: ADD_TO_COUNT,
  };
};

const removeFromCount = () => {
  return {
    type: REMOVE_FROM_COUNT,
  };
};

export const add = () => {
  return (dispatch) => {
    dispatch(addToCount());
    good(
      LOG_TYPE.REDUX,
      `REDUX SUCCESSFUL ======> /state: counter/ /file: counterActions.js add/`,
    );
  };
};

export const remove = () => {
  return (dispatch) => {
    dispatch(removeFromCount());
    good(
      LOG_TYPE.REDUX,
      `REDUX SUCCESSFUL ======> /state: counter/ /file: counterActions.js remove/`,
    );
  };
};
