import axios from "axios";
import TokenService from "./TokenService";
import { LOGIN_URL } from "../../urlConfig";

const axiosInstance = axios.create();

//A request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = TokenService.getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// A response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    // Checking if the error is due to token expiration
    if (error.response.status === 401 && !originalRequest._retry) {
      window.location.href = LOGIN_URL;
      // originalRequest._retry = true;
      // const newToken = await TokenService.refreshToken();
      // originalRequest.headers["Authorization"] = `access_Token ${newToken}`;
      // Retring the original request
      // return axiosInstance(originalRequest);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
