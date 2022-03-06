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
  FETCH_POSTS_ACTION_SUCCESS, REFRESH_POSTS_ACTION_SUCCESS,
} from '../actions';

const initialState = {
  postsLoading: false,
  posts: [],
  addPostsLoading: false,

  postLoading: false,

  addCommentLoading: false,
};

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_ACTION_STARTED: {
      return { ...state, postsLoading: true };
    }

    case FETCH_POSTS_ACTION_SUCCESS: {
      const posts = {
        ...action.data,
        content: state.posts.content ? [...state.posts.content, ...action.data.content.reverse()] : action.data.content.reverse(),
      };
      return { ...state, posts, postsLoading: false };
    }
    case REFRESH_POSTS_ACTION_SUCCESS: {
      const posts = {
        ...action.data,
        content: action.data.content.reverse(),
      };
      return { ...state, posts, postsLoading: false };
    }

    case FETCH_POSTS_ACTION_FAILED: {
      return { ...state, postsLoading: false };
    }

    case ADD_POST_ACTION_STARTED: {
      return { ...state, addPostsLoading: true };
    }

    case ADD_POST_ACTION_SUCCESS: {
      return {
        ...state,
        addPostsLoading: false,
        posts: { ...state.posts, content: [action.data, ...state.posts.content] },
      };
    }

    case ADD_POST_ACTION_FAILED: {
      return { ...state, addPostsLoading: false };
    }

    case FETCH_POST_ACTION_STARTED: {
      return { ...state, postLoading: true };
    }

    case FETCH_POST_ACTION_FAILED:
    case FETCH_POST_ACTION_SUCCESS: {
      return { ...state, postLoading: false };
    }

    case ADD_POST_COMMENT_ACTION_STARTED: {
      return { ...state, addCommentLoading: true };
    }

    case ADD_POST_COMMENT_ACTION_SUCCESS: {
      const content = state.posts.content.map((item) => {
        if (item.id === action.data) {
          return { ...item, answersCount: (item.answersCount || 0) + 1 };
        }
        return item;
      });
      return { ...state, addCommentLoading: false, posts: { ...state.posts, content } };
    }

    case ADD_POST_COMMENT_ACTION_FAILED: {
      return { ...state, addCommentLoading: false };
    }

    default: {
      return state;
    }
  }
};
