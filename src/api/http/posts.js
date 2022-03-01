import { client } from './client';

export const fetchPosts = () => {
  return client()
    .get('/v1/posts')
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
