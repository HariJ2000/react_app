// containers/LoginContainer.tsx
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from '../store/rootReducer'; // Define RootState as needed
import LoginForm from '../components/login/LoginForm'; // Import the LoginForm component
import { loginRequest, LoginRequestAction } from '../actions/loginActions'; // Import the login actions

interface StateProps {
  // Define your state props as needed
}

interface DispatchProps {
  loginRequest: (credentials: { username: string; password: string }) => void;
}

const mapStateToProps = (state: RootState): StateProps => ({
  // Map state props here
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  loginRequest: (credentials) => dispatch<LoginRequestAction>(loginRequest(credentials)),
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default LoginContainer;
