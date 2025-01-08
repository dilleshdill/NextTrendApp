import React, { useState,useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('rahul');
  const [password, setPassword] = useState('rahul@2021');
  const [notFound, setNotFound] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = Cookies.get('jwt_token');
    if (jwtToken) {
      navigate('/'); 
    }
  }, [navigate]);

  const onSubmitSuccess = (jwtToken) => {
    Cookies.set('jwt_token', jwtToken, { expires: 30 });
    console.log('Token set, navigating to home...');
    navigate('/');
  };
  const toLogin = async (event) => {
    event.preventDefault();
    const userDetails = { username, password };
    const url = '/login';
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(userDetails),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (response.ok === true) {
        onSubmitSuccess(data.jwt_token);
        setNotFound('');
      } else {
        setNotFound('*username not found');
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="logo"
          className="logo1"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="login"
          className="login-image"
        />
      </div>
      <div className="form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="logo"
          className="logo"
        />
        <form className="form" onSubmit={toLogin}>
          <label className="label">USERNAME</label>
          <input
            type="text"
            placeholder="Username"
            className="input"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <label className="label">PASSWORD</label>
          <input
            type="password"
            placeholder="Password"
            className="input"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button type="submit" className="login">
            Login
          </button>
          {notFound && <p className="error">{notFound}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
