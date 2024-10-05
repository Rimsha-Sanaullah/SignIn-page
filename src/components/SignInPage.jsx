import React, { useState } from 'react'; 
import Chocolate from '../Assets/chocolate.png';
import { Box, FormControl, FormHelperText, InputLabel, Typography, OutlinedInput, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const SignInPage = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  const [passwordError, setPasswordError] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle sign-in button click
  const handleSignIn = () => {
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match!');
    } else {
      setPasswordError('');
      // Submit the form or perform other actions here
    }
  };

  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: { xs: '105%', sm: '90%', md: '70%', lg: '50%', xl: '450px' },
        margin: 'auto',
        // padding: { xs: '16px', sm: '24px' },
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: 'background.paper',
        overflow: 'hidden',
      }}
    >
      <Box
        component="img"
        src={Chocolate}
        alt="Chocolate"
        sx={{
          width: '100%',
          height: { xs: '180px', sm: '200px', md: 'auto' }, // Responsive image height
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          display: 'block',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          padding: { xs: '0 12px', sm: '0 16px' },
          marginTop: '-100px', // Adjust margin for smaller screens
        }}
      >
        <Typography variant="h1" sx={{color: '#5B3E2D',fontWeight: 'bold', fontSize: { xs: '26px', sm: '30px', md: '36px' }, fontFamily: 'Merienda', textAlign: 'center', marginBottom: 1 }}>
          Create Account
        </Typography>

        <Box sx={{ padding: { xs: 2, sm: 3 } }}>
          <FormControl fullWidth variant="outlined" sx={{ marginBottom: 1 }}>
            <InputLabel htmlFor="name">Name</InputLabel>
            <OutlinedInput 
              id="name" 
              label="Name" 
              value={formData.name} 
              onChange={handleInputChange}
            />
            <FormHelperText>Enter Your Name</FormHelperText>
          </FormControl>

          <FormControl fullWidth variant="outlined" sx={{ marginBottom: 1 }}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <OutlinedInput 
              id="email" 
              label="Email" 
              value={formData.email}
              onChange={handleInputChange}
            />
            <FormHelperText>Enter Your Email Address</FormHelperText>
          </FormControl>

          <FormControl fullWidth variant="outlined" sx={{ marginBottom: 1 }}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput 
              id="password" 
              type="password" 
              label="Password" 
              value={formData.password}
              onChange={handleInputChange}
            />
            <FormHelperText>Enter Your Password</FormHelperText>
          </FormControl>

          <FormControl fullWidth variant="outlined" sx={{ marginBottom: 1 }}>
            <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
            <OutlinedInput 
              id="confirmPassword" 
              type="password" 
              label="Confirm Password" 
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <FormHelperText>Enter Your Password to Confirm</FormHelperText>
            {/* Show password error if passwords do not match */}
            {passwordError && <Typography color="error" variant="body2">{passwordError}</Typography>}
          </FormControl>

          <Button 
            variant="contained" 
            sx={{ marginTop: 2, width: '100%', backgroundColor: '#8B4513', color: 'white', padding: '10px 0', '&:hover': { backgroundColor: '#5B3E2D' } }}
            onClick={handleSignIn} // Call handleSignIn on click
          >
            Sign In
          </Button>
          <Typography variant="body1" sx={{ marginTop: 2, color: '#5B3E2D' }}>
            Have an account? 
            <Link to="/" style={{ color: '#5B3E2D', textDecoration: 'none',fontFamily: 'Merienda', fontWeight: 'bold' }}>Login</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SignInPage;
