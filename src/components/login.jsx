import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import '../App.css';
import loginService from '../service/login'; // Ensure the path matches your project structure

function LoginPage() {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    try {
      const role = await loginService.login({ userName, password });
      setIsLoggedIn(true); 
      
      if (role === "volunteer") {
        console.log("ahmed saed")
        navigate('/volunteer/homepage'); 
      } else if (role === "admin") {
        navigate('/admin/homepage');
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  if (isLoggedIn) {
    return <div>Loading...</div>;
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
