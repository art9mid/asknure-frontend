import { GOOGLE_CLIENT_SECRET, GOOGLE_CLIENT_ID } from '@env';
import { fetchUserPosts, refreshToken, updateUserInfo, userInfo } from '../../api/http/user';
import {
  FETCH_USER_POSTS_ACTION_FAILED,
  FETCH_USER_POSTS_ACTION_STARTED,
  FETCH_USER_POSTS_ACTION_SUCCESS,
  REFRESH_USER_POSTS_ACTION_SUCCESS,
  UPDATE_USER_INFO_ACTION_FAILED,
  UPDATE_USER_INFO_ACTION_STARTED,
  UPDATE_USER_INFO_ACTION_SUCCESS,
  USER_INFO_ACTION_FAILED,
  USER_INFO_ACTION_STARTED,
  USER_INFO_ACTION_SUCCESS,
} from '../actions';

export const userInfoThunk = ({ idToken, accessToken }) => async (dispatch) => {
  dispatch({ type: USER_INFO_ACTION_STARTED });
  try {
    const user = await userInfo(idToken);
    dispatch({ type: USER_INFO_ACTION_SUCCESS, data: { ...user, token: idToken, accessToken } });
    return { success: true };
  } catch (error) {
    dispatch({ type: USER_INFO_ACTION_FAILED });
    return { success: false };
  }
};

export const fetchUserPostsThunk =
  ({ page, size, refreshing = false }) => async (dispatch, getState) => {
    dispatch({ type: FETCH_USER_POSTS_ACTION_STARTED });
    try {
      const state = getState();
      const user = state.user.user;
      const posts = await fetchUserPosts({ page, size }, user);
      if (refreshing) {
        dispatch({ type: REFRESH_USER_POSTS_ACTION_SUCCESS, data: posts });
      } else {
        dispatch({ type: FETCH_USER_POSTS_ACTION_SUCCESS, data: posts });
      }
      return { success: true };
    } catch (error) {
      dispatch({ type: FETCH_USER_POSTS_ACTION_FAILED });
      return { success: false };
    }
  };

export const updateUserInfoThunk = (params) => async (dispatch, getState) => {
  dispatch({ type: UPDATE_USER_INFO_ACTION_STARTED });
  try {
    const state = getState();
    const user = state.user.user;
    const data = await updateUserInfo({ userId: user.id, params }, user);
    dispatch({ type: UPDATE_USER_INFO_ACTION_SUCCESS, data });
    return { success: true };
  } catch (error) {
    dispatch({ type: UPDATE_USER_INFO_ACTION_FAILED });
    return { success: false };
  }
};

export const refreshTokenThunk = () => async (dispatch, getState) => {
  try {
    const state = getState();
    const user = state.user.user;
    const refresh_token = state.user.user.accessToken;

    const data = {
      client_secret: GOOGLE_CLIENT_SECRET,
      client_id: GOOGLE_CLIENT_ID,
      refresh_token,
      grant_type: 'refresh_token',
    };
    const token = await refreshToken(data);
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};
