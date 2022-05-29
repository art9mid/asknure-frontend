import { getSystemDefaultLocale } from '../../localization';
import { CHANGE_LANGUAGE } from '../actions';

const initialState = {
  loading: false,
  locale: getSystemDefaultLocale(),
};

export const app = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      return { ...state, locale: action.data };
    }

    default: {
      return state;
    }
  }
};
