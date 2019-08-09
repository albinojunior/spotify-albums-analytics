import axios from "axios";

import { getAuthorizationToken, requestAcessToken } from "./auth";

const { REACT_APP_API_URL } = process.env;

export const api = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: { "Content-Type": "application/json" }
});

api.interceptors.request.use(async request => {
  try {
    const Authorization = await getAuthorizationToken();
    request.headers = { ...request.headers, Authorization };
    return request;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
});

api.interceptors.response.use(
  response => response,
  async error => {
    const status = error.response ? error.response.status : null;

    if (status === 401) {
      const Authorization = await requestAcessToken();
      error.config.headers = { ...error.config.headers, Authorization };
      return api.request(error.config);
    }

    return Promise.reject(error);
  }
);

export default api;
