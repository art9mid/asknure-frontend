import axios from 'axios';

// const BASE_URL = process.env.BASE_URL;
const BASE_URL = 'https://28a8-165-22-27-148.ngrok.io';

const BASE_AXIOS_CONFIG = {
  baseURL: BASE_URL,
  withCredentials: true,
  timeout: 20000,
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

  httpClient.interceptors.request.use(async (request) => {
    console.log('Starting request', JSON.stringify(request, null, 2));
    return request;
  });

  return httpClient;
}
