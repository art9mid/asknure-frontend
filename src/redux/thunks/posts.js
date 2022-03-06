import storage from '@react-native-firebase/storage';
import { addPost, addPostComment, fetchPost, fetchPosts } from '../../api/http/posts';
import {
  ADD_POST_ACTION_FAILED,
  ADD_POST_ACTION_STARTED,
  ADD_POST_ACTION_SUCCESS,
  ADD_POST_COMMENT_ACTION_FAILED,
  ADD_POST_COMMENT_ACTION_STARTED,
  ADD_POST_COMMENT_ACTION_SUCCESS,
  FETCH_POST_ACTION_FAILED,
  FETCH_POST_ACTION_STARTED,
  FETCH_POST_ACTION_SUCCESS,
  FETCH_POSTS_ACTION_FAILED,
  FETCH_POSTS_ACTION_STARTED,
  FETCH_POSTS_ACTION_SUCCESS,
  REFRESH_POSTS_ACTION_SUCCESS,
} from '../actions';

export const fetchPostsThunk =
  ({ page, size, refreshing = false }) => async (dispatch) => {
    dispatch({ type: FETCH_POSTS_ACTION_STARTED });
    try {
      const posts = await fetchPosts({ page, size });
      if (refreshing) {
        dispatch({ type: REFRESH_POSTS_ACTION_SUCCESS, data: posts });
      } else {
        dispatch({ type: FETCH_POSTS_ACTION_SUCCESS, data: posts });
      }
      return { success: true };
    } catch (error) {
      dispatch({ type: FETCH_POSTS_ACTION_FAILED });
      return { success: false };
    }
  };

export const addPostThunk = (params) => async (dispatch) => {
  dispatch({ type: ADD_POST_ACTION_STARTED });
  try {
    if (params.files) {
      await Promise.all(
        params.files.map((file) => {
          const reference = storage().ref(file.id);
          return reference.putFile(file.uri);
        }),
      );
    }

    const post = await addPost(params);
    dispatch({ type: ADD_POST_ACTION_SUCCESS, data: post });
    return { success: true };
  } catch (error) {
    dispatch({ type: ADD_POST_ACTION_FAILED });
    return { success: false, error };
  }
};

export const fetchPostThunk = (postId) => async (dispatch) => {
  dispatch({ type: FETCH_POST_ACTION_STARTED });
  try {
    const post = await fetchPost(postId);
    dispatch({ type: FETCH_POST_ACTION_SUCCESS });
    return { success: true, data: post };
  } catch (error) {
    dispatch({ type: FETCH_POST_ACTION_FAILED });
    return { success: false };
  }
};

export const addPostCommentThunk = (postId, data) => async (dispatch) => {
  dispatch({ type: ADD_POST_COMMENT_ACTION_STARTED });
  try {
    const comment = await addPostComment(postId, data);
    dispatch({ type: ADD_POST_COMMENT_ACTION_SUCCESS, data: postId });
    return { success: true, data: comment };
  } catch (error) {
    dispatch({ type: ADD_POST_COMMENT_ACTION_FAILED });
    return { success: false };
  }
};
