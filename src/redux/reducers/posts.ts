import { AnyAction } from 'redux';
import { FETCH_POSTS_ACTION_FAILED, FETCH_POSTS_ACTION_STARTED, FETCH_POSTS_ACTION_SUCCESS } from '../actions';

const initialState = {
  postsLoading: false,
  posts: [],
};

export const posts = (state = initialState, action: AnyAction) => {
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

    default: {
      return state;
    }
  }
};
