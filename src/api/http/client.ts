import axios from 'axios';
import { User } from "../../models";

const BASE_URL = process.env.BASE_URL;

const BASE_AXIOS_CONFIG = {
  baseURL: BASE_URL,
  withCredentials: true,
  validateStatus: (status: number) => status < 400,
  maxRedirects: 5,
  timeout: 20000,
};

export function client(user?: User) {
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

  httpClient.interceptors.request.use(async request => {
    console.log('Starting request', JSON.stringify(request, null, 2));
    return request;
  });

  return httpClient;
}
