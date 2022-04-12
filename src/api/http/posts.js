import { client } from './client';
import axios from 'axios';

const CancelToken = axios.CancelToken;
let cancel;

export const fetchPosts = ({ page = 0, size = 20, ...options }) => {
  cancel && cancel();
  let url = `/v1/posts?size=${size}&page=${page}`;

  if (options.searchParam) {
    url += `&searchParam=${options.searchParam}`;
  }

  return client()
    .get(url, {
      cancelToken: new CancelToken((exit) => (cancel = exit)),
    })
    .then(({ status, data }) => {
      if (status === 200 && data) {
        return data;
      }
      throw new Error(data);
    })
    .catch((error) => {
      if (axios.isCancel(error)) {
        throw { searching: true };
      } else {
        if (error instanceof Error) {
          throw error;
        }
        throw Error(error);
      }
    });
};

export const addPost = (params, user) => {
  return client(user)
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

export const addPostComment = (postId, data, user) => {
  return client(user)
    .post(`/v1/posts/${postId}`, data)
    .then((response) => {
      if (response.status === 201) {
        console.log(response);
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
