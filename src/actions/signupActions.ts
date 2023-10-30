// signupActions.ts
import { Action } from 'redux';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export interface SignupRequestAction extends Action<typeof SIGNUP_REQUEST> {
  payload: {
    // Define your signup payload here
  };
}

export const signupRequest = (userData: any): SignupRequestAction => ({
  type: SIGNUP_REQUEST,
  payload: userData,
});