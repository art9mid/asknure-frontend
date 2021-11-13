import { Dispatch } from 'react';
import { fetchPosts } from '../../api/http/posts';
import { FETCH_POSTS_ACTION_FAILED, FETCH_POSTS_ACTION_STARTED, FETCH_POSTS_ACTION_SUCCESS } from '../actions';

export const fetchPostsThunk = () => async (dispatch: Dispatch<any>) => {
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
