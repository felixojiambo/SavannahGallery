// src/pages/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to the Album Management App</h1>
      <p>This app allows you to manage users, albums, and photos efficiently.</p>
      <Link to="/login">Get Started</Link>
    </div>
  );
};

export default LandingPage;
