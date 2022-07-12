import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

const testJwtToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNTQ3NTMwMThlYzE2YTM3YWYzYTUxZmJmYjA3ZDk2ZjJlODFjMTg3NGQzOTllNDJhMDk2ZjM0MzM1NTlmNmRlODZkNzc2NDk0ZjI4YWYxMmUiLCJpYXQiOjE2NTc2Mjg3NTQuNzgzMTk4LCJuYmYiOjE2NTc2Mjg3NTQuNzgzMiwiZXhwIjoxNjU4MjMzNTU0Ljc3OTE5MSwic3ViIjoiMSIsInNjb3BlcyI6W119.spfrr03lsn3gA1PeqVFVXx_GLuRvtSAKvgtNTmZpHG8CA3090RnLy0T5PF0fIkuTV1l1zbnXD2ETMzBUn9DMuw";
const HTTP_CONFIG: AxiosRequestConfig = {
  baseURL: "http://localhost:8000/api",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer " + testJwtToken,
  },
};

export const $http: AxiosInstance = axios.create(HTTP_CONFIG);
