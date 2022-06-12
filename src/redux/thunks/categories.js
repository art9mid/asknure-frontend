import {
  ADD_CATEGORY_ACTION_FAILED,
  ADD_CATEGORY_ACTION_STARTED, ADD_CATEGORY_ACTION_SUCCESS,
  FETCH_CATEGORIES_ACTION_FAILED,
  FETCH_CATEGORIES_ACTION_STARTED,
  FETCH_CATEGORIES_ACTION_SUCCESS,
} from '../actions';
import { addCategory, fetchCategories } from '../../api/http/categories';

export const fetchCategoriesThunk = (size) => async (dispatch, getStore) => {
  dispatch({ type: FETCH_CATEGORIES_ACTION_STARTED });
  try {
    const store = getStore();
    const user = store.user.user;
    const categories = await fetchCategories(user, size);
    dispatch({ type: FETCH_CATEGORIES_ACTION_SUCCESS, data: categories });
    return { success: true };
  } catch (error) {
    dispatch({ type: FETCH_CATEGORIES_ACTION_FAILED });
    return { success: false };
  }
};

export const addCategoryThunk = (data) => async (dispatch, getStore) => {
  dispatch({ type: ADD_CATEGORY_ACTION_STARTED });
  try {
    const store = getStore();
    const user = store.user.user;

    const category = await addCategory(user, data);
    dispatch({ type: ADD_CATEGORY_ACTION_SUCCESS, data: category });

    return { success: true };
  } catch (error) {
    dispatch({ type: ADD_CATEGORY_ACTION_FAILED });
    return { success: false };
  }
};
