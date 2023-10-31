// rootSaga.ts
import { all } from 'redux-saga/effects';
import loginSaga from '../sagas/loginSaga';
// import signupSaga from '../sagas/signupSaga';

function* rootSaga() {
  yield all([
    loginSaga(), 
    // signupSaga()
  ]);
}

export default rootSaga;
