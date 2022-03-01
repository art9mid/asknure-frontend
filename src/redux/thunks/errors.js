import { CLEAR_ERROR } from '../actions';

export const clearFormErrorState = (error) => (dispatch) => {
  dispatch({ type: CLEAR_ERROR, data: error });
};
