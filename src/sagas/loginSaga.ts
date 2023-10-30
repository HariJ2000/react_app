// sagas/loginSaga.ts
import { call, put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { 
  loginRequest, 
  LOGIN_REQUEST
  // loginSuccess, 
  // loginFailure 
} from '../actions/loginActions';
import { loginService } from '../services/login';

function* handleLoginRequest(action: ReturnType<typeof loginRequest>) {
  try {
    const response = yield call(loginService, action.payload);
    console.log(response);
    
    // yield put(loginSuccess(response));
  } catch (error) {
    console.log(error);
    
    // yield put(loginFailure(error));
  }
}

function* loginSaga(): SagaIterator {
  yield takeLatest(LOGIN_REQUEST, handleLoginRequest);
}

export default loginSaga;
