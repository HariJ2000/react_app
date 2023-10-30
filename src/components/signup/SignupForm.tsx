// SignupForm.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupRequest, SignupRequestAction } from '../../actions/signupActions';

const SignupForm: React.FC = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSignup = () => {
    dispatch<SignupRequestAction>(signupRequest(userData));
  };

  return (
    <div>
      {/* Render signup form fields and handle form submission */}
    </div>
  );
};

export default SignupForm;
