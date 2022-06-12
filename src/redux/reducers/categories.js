import {
  ADD_CATEGORY_ACTION_FAILED,
  ADD_CATEGORY_ACTION_STARTED, ADD_CATEGORY_ACTION_SUCCESS,
  FETCH_CATEGORIES_ACTION_FAILED,
  FETCH_CATEGORIES_ACTION_STARTED,
  FETCH_CATEGORIES_ACTION_SUCCESS, SET_SELECTED_CATEGORIES,
} from '../actions';

const initialState = {
  categories: [],
  categoriesLoading: true,

  selectedCategories: [],

  addCategoryLoading: false,
};

export const categories = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_CATEGORIES_ACTION_STARTED: {
      return { ...state, categoriesLoading: true };
    }

    case FETCH_CATEGORIES_ACTION_SUCCESS: {
      return { ...state, categories: action.data, categoriesLoading: false };
    }

    case FETCH_CATEGORIES_ACTION_FAILED: {
      return { ...state, categoriesLoading: false };
    }

    case ADD_CATEGORY_ACTION_STARTED: {
      return { ...state, addCategoryLoading: true };
    }

    case ADD_CATEGORY_ACTION_SUCCESS: {
      return {
        ...state,
        addCategoryLoading: false,
        categories: { ...state.categories, content: [...state.categories.content, action.data] },
      };
    }

    case ADD_CATEGORY_ACTION_FAILED: {
      return { ...state, addCategoryLoading: false };
    }

    case SET_SELECTED_CATEGORIES: {
      return { ...state, selectedCategories: action.data };
    }

    default: {
      return state;
    }
  }
};
