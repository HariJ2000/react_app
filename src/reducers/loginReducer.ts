import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/loginActions';

type Action = {
  type: string;
  payload?: any; // Payload can be of any type
};

interface LoginState {
  user: any; // Define your user type
  loading: boolean;
  error: any;
}

const initialState:LoginState = {
  user: null,
  loading: false,
  error: null,
};

const loginReducer = (state = initialState, action:Action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
