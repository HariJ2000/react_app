// containers/LoginContainer.tsx
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from '../store/rootReducer'; // Define RootState as needed
import LoginForm from '../components/login/LoginForm'; // Import the LoginForm component
import { loginRequest, LoginRequestAction } from '../actions/loginActions'; // Import the login actions

interface StateProps {
  user: any | null; // Define the type of 'user' based on your actual state structure
  loading: boolean;
  error: string | null;
}

interface DispatchProps {
  loginRequest: (credentials: { username: string; password: string }) => void;
}

const mapStateToProps = (state: RootState): StateProps => ({
  user: state.login.user,
  loading: state.login.loading,
  error: state.login.error,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  loginRequest: (credentials) => dispatch<LoginRequestAction>(loginRequest(credentials)),
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default LoginContainer;
