import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Styles/Signup.css';
import Navbar from '../Component/Navbar';
import CustomNavbar from '../Component/Navbar';

const Signup = () => {
  const [emailId, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Role, setRole] = useState('User'); // Default role is "User"
  const [error, setError] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {


    if (!emailId.endsWith('@gmail.com')) {
      setError('Email should end with @gmail.com');
      return;
    }

    // Password length validation
    if (password.length < 4) {
      setError('Password should be at least 4 characters long');
      return;
    }

    
    try {
      // Construct the API endpoint
      const apiEndpoint = `https://localhost:7120/api/auth/register/${Role}`;
  
      // Make the POST request with the data including the role
      await axios.post(apiEndpoint, { emailId, password, Role });
  
      // Set signup success to true
      setSignupSuccess(true);
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  // Redirect to login page when signupSuccess changes to true
  useEffect(() => {
    if (signupSuccess) {
      const timer = setTimeout(() => {
        navigate('/login');
      }, 3000); // Redirect after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [signupSuccess, navigate]);

  return (
    <div className="background-image-container">
      <CustomNavbar/>
      <div className="signup-container">
        <h2>Signup</h2>
        <input type="text" placeholder="Email" value={emailId} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <select className='signup-select' value={Role} onChange={(e) => setRole(e.target.value)}>
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
        <button onClick={handleSignup}>Signup</button>
        <div>Already a user? Login here.</div>
        <button onClick={handleLoginRedirect}>Login</button>
        {error && <div className="error-message">{error}</div>}
        {signupSuccess && <div className="success-message">Signup successful! Redirecting to login...</div>}
      </div>
    </div>
  );
};

export default Signup;