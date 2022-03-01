import { CLEAR_ERROR } from '../actions';

const initialState = {
  addPostError: null,
};

export const errors = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_ERROR: {
      return { ...state, [action.data]: null };
    }

    default: {
      return state;
    }
  }
};
