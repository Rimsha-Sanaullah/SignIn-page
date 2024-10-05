import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from './components/SignInPage';
import LoginPage from './components/LoginPage';
import './App.css';
import { Box } from '@mui/material';
import LeftImage from './Assets/Right.png';  // Add your left image here

function App() {
  return (
    <Router>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          backgroundColor: '#fffff0',
          padding: '20px',
        }}
      >
        {/* Centered Pages (LoginPage and SignInPage) */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            width: '100%',
            maxWidth: '600px', // Adjust width if needed
            // backgroundColor: '#fff',
            // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
            padding: '20px',
          }}
        >
          {/* Route Handling */}
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signin" element={<SignInPage />} />
          </Routes>
        </Box>

        {/* Left Image with Reduced Opacity */}
        <Box
          component="img"
          src={LeftImage}
          alt="Left decoration"
          sx={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            height: '300px', // Adjust height as needed
            opacity: 0.8,    // Reduced opacity
          }}
        />
      </Box>
    </Router>
  );
}

export default App;
