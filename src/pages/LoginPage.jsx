// src/pages/LoginPage.js
import React from 'react';
import { auth, googleProvider } from '../firebase';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const history = useHistory();

  const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider)
      .then((result) => {
        history.push('/home');
      })
      .catch((error) => {
        console.error("Error signing in with Google: ", error);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default LoginPage;
