import { CLEAR_ERROR } from '../actions';

export const clearFormErrorState = (error: string) => (dispatch) => {
  dispatch({ type: CLEAR_ERROR, data: error });
};
