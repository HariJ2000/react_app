// loginActions.ts
import { Action } from 'redux';
import { createAction } from '@reduxjs/toolkit';

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

export const loginSuccess = createAction<any>(LOGIN_SUCCESS); // Define your user type instead of 'any'
export const loginFailure = createAction<any>(LOGIN_FAILURE);
