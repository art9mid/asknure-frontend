import {
  ADD_POST_ACTION_FAILED,
  ADD_POST_ACTION_STARTED,
  ADD_POST_ACTION_SUCCESS,
  FETCH_POSTS_ACTION_FAILED,
  FETCH_POSTS_ACTION_STARTED,
  FETCH_POSTS_ACTION_SUCCESS,
} from '../actions';

const initialState = {
  postsLoading: false,
  posts: [],
  addPostsLoading: false,
};

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_ACTION_STARTED: {
      return { ...state, postsLoading: true };
    }

    case FETCH_POSTS_ACTION_SUCCESS: {
      return { ...state, posts: action.data, postsLoading: false };
    }

    case FETCH_POSTS_ACTION_FAILED: {
      return { ...state, postsLoading: false };
    }

    case ADD_POST_ACTION_STARTED: {
      return { ...state, addPostsLoading: true };
    }

    case ADD_POST_ACTION_SUCCESS: {
      //todo: backend
      return { ...state, addPostsLoading: false };
      // return { ...state, addPostsLoading: false, posts: { ...state.posts, content: [action.data, ...state.content] } };
    }

    case ADD_POST_ACTION_FAILED: {
      return { ...state, addPostsLoading: false };
    }

    default: {
      return state;
    }
  }
};
