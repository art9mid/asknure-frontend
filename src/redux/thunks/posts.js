import { addPost, fetchPosts } from '../../api/http/posts';
import {
  ADD_POST_ACTION_FAILED,
  ADD_POST_ACTION_STARTED,
  ADD_POST_ACTION_SUCCESS,
  FETCH_POSTS_ACTION_FAILED,
  FETCH_POSTS_ACTION_STARTED,
  FETCH_POSTS_ACTION_SUCCESS,
} from '../actions';

export const fetchPostsThunk = () => async (dispatch) => {
  dispatch({ type: FETCH_POSTS_ACTION_STARTED });
  try {
    const posts = await fetchPosts();
    dispatch({ type: FETCH_POSTS_ACTION_SUCCESS, data: posts });
    return { success: true };
  } catch (error) {
    dispatch({ type: FETCH_POSTS_ACTION_FAILED });
    return { success: false };
  }
};

export const addPostThunk = (params) => async (dispatch) => {
  dispatch({ type: ADD_POST_ACTION_STARTED });
  try {
    const post = await addPost(params);
    console.log(post);
    dispatch({ type: ADD_POST_ACTION_SUCCESS, data: post });
    return { success: true };
  } catch (error) {
    dispatch({ type: ADD_POST_ACTION_FAILED });
    return { success: false };
  }
};
