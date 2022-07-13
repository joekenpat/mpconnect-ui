import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
} from "axios";
import store from "@/store";

const HTTP_CONFIG: AxiosRequestConfig = {
  baseURL: process.env.BASE_URL || "http://localhost:8000/api",
  headers: {
    Accept: "application/json",
  },
};

const $http: AxiosInstance = axios.create(HTTP_CONFIG);
$http.interceptors.request.use((config) => {
  const jwtToken = store.state.auth_user?.auth_token || undefined;
  if (jwtToken) {
    config.headers = {
      ...config.headers,
      Authorization: "Bearer " + jwtToken,
    } as AxiosRequestHeaders;
    return config;
  } else {
    return config;
  }
});

export { $http };
