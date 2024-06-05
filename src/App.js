
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
import PrivateRoute from './components/PrivateRoutes';
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path="/users/:id" element={<PrivateRoute><UserPage /></PrivateRoute>} />
        <Route path="/albums/:id" element={<PrivateRoute><AlbumPage /></PrivateRoute>} />
        <Route path="/photos/:id" element={<PrivateRoute><PhotoPage /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
