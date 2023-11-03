// components/login/Login.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginContainer from '../../containers/LoginContainer'; // Import the LoginContainer component

const Login: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
              <LoginContainer /> {/* Use the LoginContainer component here */}
              {/* <Link to="/signup" className="btn btn-link">
                Sign Up
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
