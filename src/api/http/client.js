import axios from 'axios';
import configureStore from '../../redux/store';
import { logoutThunk, refreshTokenThunk } from '../../redux/thunks/user';

const BASE_URL = 'https://0429-80-93-119-161.eu.ngrok.io';

const BASE_AXIOS_CONFIG = {
  baseURL: BASE_URL,
  withCredentials: false,
};

export function client(user) {
  const { store } = configureStore();
  let httpClient;

  if (user) {
    httpClient = axios.create({
      ...BASE_AXIOS_CONFIG,
      withCredentials: false,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Cache-Control': 'no-cache',
        Authorization: `Bearer ${user.token}`,
      },
    });
  } else {
    httpClient = axios.create({
      ...BASE_AXIOS_CONFIG,
      withCredentials: false,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Cache-Control': 'no-cache',
      },
    });
  }

  httpClient.interceptors.request.use(
    async (request) => {
      console.log('Starting request', JSON.stringify(request, null, 2));
      return request;
    },
  );

  httpClient.interceptors.response.use(
    async (response) => {
      return response;
    },
    async function (error) {
      if (error?.response) {
        const config = error.response.config;
        if (error.response.status === 401 && !config._retry) {
          const data = config?.data ? JSON.parse(config.data) : {};
          const response = await store.dispatch(refreshTokenThunk());
          if (response.success && response.token) {
            config.headers.Authorization = `Bearer ${response.token}`;
            config._retry = true;
            return httpClient({ ...config, data });
          } else {
            store.dispatch(logoutThunk());
            return Promise.reject(config);
          }
        }
      }

      return Promise.reject(error);
    },
  );

  return httpClient;
}
