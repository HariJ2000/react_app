// SignupContainer.tsx
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from '../reducers/rootReducer'; // Define RootState as needed
import { signupRequest, SignupRequestAction } from '../actions/signupActions';
import SignupForm from '../components/signup/SignupForm';

interface StateProps {
  // Define your state props as needed
}

interface DispatchProps {
  signupRequest: (userData: any) => void;
}

const mapStateToProps = (state: RootState): StateProps => ({
  // Map state props here
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  signupRequest: (userData) => dispatch<SignupRequestAction>(signupRequest(userData)),
});

const SignupContainer = connect(mapStateToProps, mapDispatchToProps)(SignupForm);

export default SignupContainer;
