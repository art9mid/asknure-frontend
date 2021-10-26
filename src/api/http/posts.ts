import { client } from './client';

export const fetchPosts = () => {
  return client()
    .get('/api/v1/posts')
    .then((response) => {
      if (response.status === 200 && response.data) {
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
