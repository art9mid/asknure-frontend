import { fetchPosts } from '../../api/http/posts';

export const fetchPostsThunk = () => async (dispatch) => {
  try {
    const postsData = await fetchPosts();
    return { success: true }
  } catch (error) {

  }
}
