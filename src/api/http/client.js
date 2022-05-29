import axios from 'axios';

// const BASE_URL = process.env.BASE_URL;
const BASE_URL = 'https://2f8b-176-103-11-111.ngrok.io';

const BASE_AXIOS_CONFIG = {
  baseURL: BASE_URL,
  withCredentials: true,
};

export function client(user) {
  let httpClient;

  if (user) {
    httpClient = axios.create({
      ...BASE_AXIOS_CONFIG,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    });
  } else {
    httpClient = axios.create({
      ...BASE_AXIOS_CONFIG,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  httpClient.interceptors.request.use(
    async (request) => {
      console.log('Starting request', JSON.stringify(request, null, 2));
      return request;
    },
    async function (error) {
      const { config } = error.response;
      //
      // //update current token
      // if (error.response.status === 401 && !config._retry) {
      //   const data = config?.data ? JSON.parse(config.data) : {};
      //
      //   return httpClient({ ...config, data });
      // }
      return Promise.reject(error);
    },
  );

  return httpClient;
}
