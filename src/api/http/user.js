import axios from 'axios';
import { client } from './client';

export const userInfo = (token) => {
  return client({ token })
    .get('/v1/users/user-info')
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

export const updateUserInfo = ({ userId, params }, user) => {
  return client(user)
    .put(`/v1/users/${userId}`, params)
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

export const fetchUserPosts = ({ page = 0, size = 20 }, user) => {
  return client(user)
    .get(`/v1/posts/user?size=${size}&page=${page}`)
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

export const refreshToken = (data) => {
  return axios
    .get('https://oauth2.googleapis.com/token', {
      headers: { 'Content-Type': 'application/json' },
      data,
    })
    .then((response) => {
      console.log(response);
      if (response.status === 200 && data) {
        return data;
      }
      throw new Error(data);
    })
    .catch((error) => {
      console.log(error);
      if (error instanceof Error) {
        throw error;
      }
      throw Error(error);
    });
};
