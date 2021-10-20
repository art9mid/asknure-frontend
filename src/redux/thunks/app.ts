import {
  CLEAR_SEARCH_DATA,
  GET_USER_POSTS_ACTION_FAILED,
  GET_USER_POSTS_ACTION_STARTED,
  GET_USER_POSTS_ACTION_SUCCESS,
  GET_USERS_ACTION_FAILED,
  GET_USERS_ACTION_STARTED,
  GET_USERS_ACTION_SUCCESS,
  SEARCH_ACTION_FAILED,
  SEARCH_ACTION_STARTED, SEARCH_POSTS_ACTION_SUCCESS,
  SEARCH_USERS_ACTION_SUCCESS,
} from '../actions';
import { getUserPosts, getUsers } from '../../API/http/user';
import { search } from '../../API/http/search';

export const getUsersThunk = () => async (dispatch) => {
  dispatch({ type: GET_USERS_ACTION_STARTED });
  try {
    const users = await getUsers();
    dispatch({ type: GET_USERS_ACTION_SUCCESS, data: users });
    return { success: true, users };
  } catch (error) {
    dispatch({ type: GET_USERS_ACTION_FAILED });
    return { success: false };
  }
};

export const getUserPostsThunk = (id) => async (dispatch) => {
  dispatch({ type: GET_USER_POSTS_ACTION_STARTED });
  try {
    const posts = await getUserPosts(id);
    dispatch({ type: GET_USER_POSTS_ACTION_SUCCESS, data: posts });
    return { success: true, posts };
  } catch (error) {
    dispatch({ type: GET_USER_POSTS_ACTION_FAILED });
    return { success: false };
  }
};

/**
 * @param {string} type - Search type: post, users
 * @param {string} searchBy
 * @param {string} value - Search value.
 */

export const searchByThunk = (type, searchBy, value) => async (dispatch) => {
  dispatch({ type: SEARCH_ACTION_STARTED });
  try {
    const response = await search(type, searchBy, value);
    if (type === 'users') {
      dispatch({ type: SEARCH_USERS_ACTION_SUCCESS, data: response });
    } else if (type === 'posts') {
      dispatch({ type: SEARCH_POSTS_ACTION_SUCCESS, data: response });
    }
  } catch (error) {
    dispatch({ type: SEARCH_ACTION_FAILED });
  }
};

export const clearSearchDataThunk = () => (dispatch) => {
  dispatch({ type: CLEAR_SEARCH_DATA });
};
