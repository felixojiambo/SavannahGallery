// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import AlbumPage from './pages/AlbumPage';
import PhotoPage from './pages/PhotoPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/Navbar'
function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/user/:userId" element={<UserPage />} />
      <Route path="/album/:albumId" element={<AlbumPage />} />
      <Route path="/photo/:photoId" element={<PhotoPage />} />
    </Routes>
  </Router>
  );
}

export default App;
