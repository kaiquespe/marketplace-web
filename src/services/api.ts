import axios from 'axios';
import { API_BASE_URL, ERROR_MESSAGES } from '../config';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/sign-in';
    }
    return Promise.reject(error);
  }
);

export const handleApiError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    switch (error.response?.status) {
      case 401:
        return ERROR_MESSAGES.UNAUTHORIZED;
      case 404:
        return 'Resource not found';
      case 500:
        return ERROR_MESSAGES.SERVER_ERROR;
      default:
        return error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR;
    }
  }
  return ERROR_MESSAGES.NETWORK_ERROR;
}; 