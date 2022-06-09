import {
  FETCH_USER_POSTS_ACTION_FAILED,
  FETCH_USER_POSTS_ACTION_STARTED,
  FETCH_USER_POSTS_ACTION_SUCCESS,
  LOGOUT,
  REFRESH_USER_POSTS_ACTION_SUCCESS,
  UPDATE_USER_INFO_ACTION_FAILED,
  UPDATE_USER_INFO_ACTION_STARTED,
  UPDATE_USER_INFO_ACTION_SUCCESS,
  USER_INFO_ACTION_FAILED,
  USER_INFO_ACTION_STARTED,
  USER_INFO_ACTION_SUCCESS,
} from '../actions';

const initialState = {
  user: null,
  userLoading: false,

  posts: null,
  postsLoading: false,

  updateUserLoading: false,
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT: {
      return { ...state, user: null };
    }

    case USER_INFO_ACTION_STARTED: {
      return { ...state, userLoading: true };
    }

    case USER_INFO_ACTION_SUCCESS: {
      return { ...state, userLoading: false, user: action.data };
    }

    case USER_INFO_ACTION_FAILED: {
      return { ...state, userLoading: false };
    }

    case FETCH_USER_POSTS_ACTION_STARTED: {
      return { ...state, postsLoading: true };
    }

    case FETCH_USER_POSTS_ACTION_SUCCESS: {
      const posts = {
        ...action.data,
        content: state.posts.content ? [...state.posts.content, ...action.data.content] : action.data.content,
      };
      return { ...state, posts, postsLoading: false };
    }

    case REFRESH_USER_POSTS_ACTION_SUCCESS: {
      const posts = {
        ...action.data,
        content: action.data.content,
      };
      return { ...state, posts, postsLoading: false };
    }

    case FETCH_USER_POSTS_ACTION_FAILED: {
      return { ...state, postsLoading: false };
    }

    case UPDATE_USER_INFO_ACTION_STARTED: {
      return { ...state, updateUserLoading: true };
    }

    case UPDATE_USER_INFO_ACTION_SUCCESS: {
      return { ...state, user: { ...state.user, ...action.data }, updateUserLoading: false };
    }

    case UPDATE_USER_INFO_ACTION_FAILED: {
      return { ...state, updateUserLoading: false };
    }

    default: {
      return state;
    }
  }
};
