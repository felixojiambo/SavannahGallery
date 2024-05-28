// src/pages/LoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../config/firebase';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate('/home');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="login-container">
      <button className="btn btn-primary" onClick={handleLogin}>
        Sign in with Google
      </button>
    </div>
  );
};

export default LoginPage;
