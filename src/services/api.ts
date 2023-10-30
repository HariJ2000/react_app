import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const handleSuccess = (response: AxiosResponse) => response.data;
const handleError = (error: AxiosError) => {
  throw error;
};

export const getRequest = <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  return api.get(url, config).then(handleSuccess).catch(handleError);
};

export const postRequest = <T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> => {
  return api.post(url, data, config).then(handleSuccess).catch(handleError);
};

export const putRequest = <T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> => {
  return api.put(url, data, config).then(handleSuccess).catch(handleError);
};

export const deleteRequest = <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  return api.delete(url, config).then(handleSuccess).catch(handleError);
};