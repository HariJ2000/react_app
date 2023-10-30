// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import Login from './components/login/Login';
// import Signup from './components/signup/Signup';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Your navigation/header components can go here if needed */}
        <Routes> {/* Use Routes component here */}
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          {/* Add more routes for other parts of your application */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
