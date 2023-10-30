// rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from '../reducers/loginReducer';
// import signupReducer from '../reducers/signupReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  // signup: signupReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer; 
    