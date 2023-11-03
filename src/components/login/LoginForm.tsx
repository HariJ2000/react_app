// components/login/LoginForm.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginRequest } from '../../actions/loginActions';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm: React.FC = (props) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const dispatch = useDispatch();

  const validateUsername = (value: string) => {
    if (value.length < 4) {
      setUsernameError('Username must be at least 4 characters.');
      return false;
    }
    setUsernameError('');
    return true;
  };

  const validatePassword = (value: string) => {
      let error = 'Password must contain';
  
      if (value.length < 8) {
        error += ' at least 8 characters';
      }
  
      if (!/[A-Z]/.test(value)) {
        error += ', at least one uppercase letter';
      }
      if (!/[a-z]/.test(value)) {
        error += ', at least one lowercase letter';
      }
      if (!/\d/.test(value)) {
        error += ', at least one number';
      }
      if (!/[^A-Za-z0-9]/.test(value)) {
        error += ', at least one special character';
      }

      if(error.length > 21){
        error += '. '
        const consecutiveCharsRegex = /(.)\1{2,}/; // Matches 3 or more consecutive characters
        if (consecutiveCharsRegex.test(value)) {
          error += 'Password contains too many consecutive characters. ';
        }
    
        const sequentialCharsRegex = /abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz/i;
        if (sequentialCharsRegex.test(value)) {
          error += 'Password contains sequential characters. ';
        }
      }
  
      setPasswordError(error.trim()); // Remove leading/trailing spaces
  
      return !error;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if(name === 'username'){
      validateUsername(e.target.value)
    }else{
      validatePassword(e.target.value)
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isUsernameValid = validateUsername(formData.username);
    const isPasswordValid = validatePassword(formData.password);

    if (isUsernameValid && isPasswordValid) {
      dispatch(loginRequest(formData));
    }

    // Dispatch the loginRequest action to trigger the loginSaga
    // dispatch(loginRequest(formData));
    // props.loginRequest(formData)
  };

  console.log(props);
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          className="form-control"
          value={formData.username}
          onChange={handleInputChange}
        />
      {usernameError && <div className="error-message">{usernameError}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="form-control"
          value={formData.password}
          onChange={handleInputChange}
        />
      {passwordError && <div className="error-message">{passwordError}</div>}
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
