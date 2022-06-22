import { Platform } from 'react-native';
import {
  ADD_POST_ACTION_FAILED,
  ADD_POST_ACTION_STARTED,
  ADD_POST_ACTION_SUCCESS,
  ADD_POST_COMMENT_ACTION_FAILED,
  ADD_POST_COMMENT_ACTION_STARTED,
  ADD_POST_COMMENT_ACTION_SUCCESS, DELETE_POST_ACTION_FAILED, DELETE_POST_ACTION_STARTED, DELETE_POST_ACTION_SUCCESS,
  FETCH_POST_ACTION_FAILED,
  FETCH_POST_ACTION_STARTED,
  FETCH_POST_ACTION_SUCCESS,
  FETCH_POSTS_ACTION_FAILED,
  FETCH_POSTS_ACTION_STARTED,
  FETCH_POSTS_ACTION_SUCCESS, FETCH_SELECTED_POSTS_ACTION_SUCCESS,
  LOAD_MORE_SEARCH_POSTS_ACTION_SUCCESS,
  REFRESH_POSTS_ACTION_SUCCESS,
  SEARCH_POSTS_ACTION_FAILED,
  SEARCH_POSTS_ACTION_STARTED,
  SEARCH_POSTS_ACTION_SUCCESS, UPDATE_POST_ACTION_FAILED, UPDATE_POST_ACTION_STARTED, UPDATE_POST_ACTION_SUCCESS,
} from '../actions';
import {
  addPost,
  addPostComment,
  deletePost,
  fetchPost,
  fetchPosts,
  updatedPost,
  uploadPostFile,
} from '../../api/http/posts';

export const fetchPostsThunk =
  ({ page, size, refreshing = false }) => async (dispatch, getStore) => {
    dispatch({ type: FETCH_POSTS_ACTION_STARTED });
    try {
      const store = getStore();
      const categories = store.categories.selectedCategories;

      if (categories.length) {
        const selectedPosts = await fetchPosts({ page, size, categories });
        dispatch({ type: FETCH_SELECTED_POSTS_ACTION_SUCCESS, data: selectedPosts });
      } else {
        dispatch({ type: FETCH_SELECTED_POSTS_ACTION_SUCCESS, data: {} });
      }

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

export const searchPostsThunk =
  ({ page, size, value, loadMore = false }) => async (dispatch) => {
    dispatch({ type: SEARCH_POSTS_ACTION_STARTED, loadMore });
    try {
      const posts = await fetchPosts({ page, size, searchParam: value });
      if (loadMore) {
        dispatch({ type: LOAD_MORE_SEARCH_POSTS_ACTION_SUCCESS, data: posts });
      } else {
        dispatch({ type: SEARCH_POSTS_ACTION_SUCCESS, data: posts });
      }
      return { success: true };
    } catch (error) {
      if (!error?.searching) {
        dispatch({ type: SEARCH_POSTS_ACTION_FAILED });
        return { success: false };
      }
    }
  };

const uploadSingleFile = (user, file) => {
  const formData = new FormData();
  const fileUrl = Platform.OS === 'ios' ? file.uri.replace('file://', '') : file.uri;
  const parts = file.uri.split('/');
  const fileName = parts[parts.length - 1];
  formData.append('file', {
    uri: fileUrl,
    name: fileName,
    contentType: file.type,
    type: 'multipart/form-data',
  });

  return uploadPostFile(user, formData);
};

export const addPostThunk = (params, files) => async (dispatch, getStore) => {
  dispatch({ type: ADD_POST_ACTION_STARTED });
  try {
    const store = getStore();
    const user = store.user.user;

    if (files) {
      const filesToSend = files.map((file) => uploadSingleFile(user, file));
      params.files = await Promise.all(filesToSend);
    }

    const post = await addPost(params, user);

    dispatch({ type: ADD_POST_ACTION_SUCCESS, data: post });
    return { success: true };
  } catch (error) {
    dispatch({ type: ADD_POST_ACTION_FAILED });
    return { success: false, error };
  }
};

export const updatedPostThunk = (id, params) => async (dispatch, getStore) => {
  dispatch({ type: UPDATE_POST_ACTION_STARTED });
  try {
    const store = getStore();
    const user = store.user.user;
    const post = await updatedPost(id, params, user);
    dispatch({ type: UPDATE_POST_ACTION_SUCCESS, data: post });
    return { success: true };
  } catch (error) {
    dispatch({ type: UPDATE_POST_ACTION_FAILED });
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

export const deletePostThunk = (postId) => async (dispatch, getStore) => {
  dispatch({ type: DELETE_POST_ACTION_STARTED });
  try {
    const store = getStore();
    const user = store.user.user;
    await deletePost(postId, user);
    dispatch({ type: DELETE_POST_ACTION_SUCCESS, id: postId });
    return { success: true };
  } catch (error) {
    dispatch({ type: DELETE_POST_ACTION_FAILED, id: postId });
    return { success: false };
  }
};

export const addPostCommentThunk = (postId, data) => async (dispatch, getStore) => {
  dispatch({ type: ADD_POST_COMMENT_ACTION_STARTED });
  try {
    const store = getStore();
    const user = store.user.user;

    const comment = await addPostComment(postId, data, user);
    dispatch({ type: ADD_POST_COMMENT_ACTION_SUCCESS, data: postId });
    return { success: true, data: comment };
  } catch (error) {
    dispatch({ type: ADD_POST_COMMENT_ACTION_FAILED });
    return { success: false };
  }
};
