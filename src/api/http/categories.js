import { client } from './client';

export const fetchCategories = (user, size = 10) => {
  return client(user)
    .get(`/v1/categories?size=${size}`)
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

export const addCategory = (user, data) => {
  return client(user)
    .post('/v1/categories', data)
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
