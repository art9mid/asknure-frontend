import {
  DELETE_POST_ACTION_FAILED,
  DELETE_POST_ACTION_STARTED,
  DELETE_POST_ACTION_SUCCESS,
  FETCH_USER_POSTS_ACTION_FAILED,
  FETCH_USER_POSTS_ACTION_STARTED,
  FETCH_USER_POSTS_ACTION_SUCCESS,
  LOGOUT,
  REFRESH_USER_POSTS_ACTION_SUCCESS, UPDATE_POST_ACTION_FAILED, UPDATE_POST_ACTION_STARTED, UPDATE_POST_ACTION_SUCCESS,
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

  deletePostLoading: false,

  updatePostLoading: false,

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

    case DELETE_POST_ACTION_STARTED: {
      return { ...state, deletePostLoading: true };
    }

    case DELETE_POST_ACTION_SUCCESS: {
      const content = state.posts.content.filter((item) => item.id !== action.id);
      const posts = {
        ...action.data,
        content: content,
      };
      return { ...state, posts, deletePostLoading: false };
    }

    case DELETE_POST_ACTION_FAILED: {
      return { ...state, deletePostLoading: false };
    }

    case UPDATE_POST_ACTION_STARTED: {
      return { ...state, updatePostLoading: true };
    }

    case UPDATE_POST_ACTION_SUCCESS: {
      const content = state.posts.content.map((item) => {
        if (item.id === action.data.id) {
          return action.data;
        }
        return item;
      });

      const posts = {
        ...action.data,
        content: content,
      };
      return { ...state, posts, updatePostLoading: false };
    }

    case UPDATE_POST_ACTION_FAILED: {
      return { ...state, updatePostLoading: false };
    }

    default: {
      return state;
    }
  }
};
