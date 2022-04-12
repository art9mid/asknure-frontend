import { client } from './client';

export const fetchPosts = ({ page = 0, size = 20 }) => {
  return client()
    .get(`/v1/posts?size=${size}&page=${page}`)
    .then(({ status, data }) => {
      if (status === 200 && data) {
        return data;
      }
      throw new Error(data);
    })
    .catch((error) => {
      if (error instanceof Error) {
        throw error;
      }
      throw Error(error);
    });
};

export const addPost = (params) => {
  return client()
    .post('/v1/posts', params)
    .then(({ status, data }) => {
      if (status === 201) {
        return data;
      }
      throw new Error(data);
    })
    .catch((error) => {
      if (error instanceof Error) {
        throw error;
      }
      throw Error(error);
    });
};

export const fetchPost = (postId) => {
  return client()
    .get(`/v1/posts/${postId}`)
    .then(({ status, data }) => {
      if (status === 200) {
        return data;
      }
      throw new Error(data);
    })
    .catch((error) => {
      if (error instanceof Error) {
        throw error;
      }
      throw Error(error);
    });
};

export const addPostComment = (postId, data) => {
  return client()
    .post(`/v1/posts/${postId}`, data)
    .then((response) => {
      if (response.status === 201) {
        return response.data;
      }
      throw new Error(response.data);
    })
    .catch((error) => {
      if (error instanceof Error) {
        throw error;
      }
      throw Error(error);
    });
};
