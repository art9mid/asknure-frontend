import { client } from './client';
import axios from 'axios';

const CancelToken = axios.CancelToken;
let cancel;

export const fetchPosts = ({ page = 0, size = 20, ...options }) => {
  cancel && cancel();
  const params = new URLSearchParams();
  params.append('size', size);
  params.append('page', page);

  if (options.searchParam) {
    params.append('searchParam', options.searchParam);
  }

  if (options.categories && Array.isArray(options.categories)) {
    options.categories.forEach((item) => {
      params.append('categories', item.name);
    });
  }

  return client()
    .get(`/v1/posts?${params}`, {
      cancelToken: new CancelToken((exit) => (cancel = exit)),
    })
    .then((response) => {
      if (response.status === 200 && response.data) {
        return response.data;
      }
      throw new Error(response.data);
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
export const updatedPost = (id, params, user) => {
  return client(user)
    .put(`/v1/posts/${id}`, params)
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

export const deletePost = (postId, user) => {
  return client(user)
    .delete(`/v1/posts/${postId}`)
    .then((response) => {
      if (response.status === 200) {
        return;
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

export const uploadPostFile = (user, data) => {
  return client(user)
    .post(`/v1/files`, data, {
      headers: {
        'Content-Type': 'multipart/form-data;',
      },
    })
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
