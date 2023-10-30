import { postRequest } from './api';

export const loginService = async (credentials: { username: string; password: string }) => {
  return postRequest<any>('/login', credentials);
};
