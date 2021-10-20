import { AnyAction } from "redux";

const initialState = {
  loading: false,
};

export const app = (state = initialState, action: AnyAction) => {
  switch (action.type) {

    default: {
      return state;
    }
  }
};
