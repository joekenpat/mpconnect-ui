import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
} from "axios";
import store from "@/store";

const HTTP_CONFIG: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_APP_BASE_URL || "http://localhost:8000/api",
  headers: {
    Accept: "application/json",
  },
};

const $http: AxiosInstance = axios.create(HTTP_CONFIG);
$http.interceptors.request.use(async (config) => {
  await store.dispatch("setLoading", true);
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

$http.interceptors.response.use(async (response) => {
  await store.dispatch("setLoading", false);
  return response;
});

export { $http };
