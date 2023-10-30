// loginActions.ts
import { Action } from 'redux';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export interface LoginRequestAction extends Action<typeof LOGIN_REQUEST> {
  payload: {
    username: string;
    password: string;
  };
}

export const loginRequest = (credentials: { username: string; password: string }): LoginRequestAction => ({
  type: LOGIN_REQUEST,
  payload: credentials,
});


