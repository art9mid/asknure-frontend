import { getSystemDefaultLocale } from '../../localization';
import { CHANGE_FIRST_ENTER_USER_QUESTIONS, CHANGE_LANGUAGE } from '../actions';

const initialState = {
  loading: false,
  locale: getSystemDefaultLocale(),
  fistEnterUserQuestions: true,
};

export const app = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      return { ...state, locale: action.data };
    }

    case CHANGE_FIRST_ENTER_USER_QUESTIONS: {
      return { ...state, fistEnterUserQuestions: false };
    }

    default: {
      return state;
    }
  }
};
