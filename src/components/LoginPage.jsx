import React, { useState } from 'react';
import Chocolate from '../Assets/chocolate.png';
import { Box, FormControl, FormHelperText, InputLabel, Typography, OutlinedInput, Button, IconButton, InputAdornment } from '@mui/material';
import { Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: false, password: false });
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: false }); 
  };

  const handleLogin = () => {
    const newErrors = {
      email: !formData.email,
      password: !formData.password,
    };
    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
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
          height: { xs: '180px', sm: '200px', md: 'auto' },
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
          marginTop: '-100px',
        }}
      >
        <Typography variant="h3" sx={{ color: '#5B3E2D', fontSize: { xs: '18px', sm: '20px', md: '24px' }, fontFamily: 'Merienda', textAlign: 'center', marginBottom: 0.5 }}>
          Hi there,
        </Typography>
        <Typography variant="h1" sx={{ color: '#5B3E2D', fontWeight: 'bold', fontSize: { xs: '26px', sm: '30px', md: '36px' }, fontFamily: 'Merienda', textAlign: 'center', marginBottom: 1 }}>
          Welcome Back
        </Typography>

        <Box sx={{ padding: { xs: 2, sm: 3 } }}>
          <FormControl fullWidth variant="outlined" sx={{ marginBottom: 2 }} error={errors.email}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <OutlinedInput 
              id="email" 
              label="Email" 
              value={formData.email} 
              onChange={handleInputChange} 
            />
            <FormHelperText>{errors.email ? 'Email is required' : 'Enter Your Email Address'}</FormHelperText>
          </FormControl>

          <FormControl fullWidth variant="outlined" sx={{ marginBottom: 2 }} error={errors.password}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput 
              id="password" 
              type={showPassword ? 'text' : 'password'} 
              label="Password" 
              value={formData.password}
              onChange={handleInputChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText>{errors.password ? 'Password is required' : 'Enter Your Password'}</FormHelperText>
          </FormControl>

          <Button 
            variant="contained" 
            sx={{ marginTop: 3, width: '100%', backgroundColor: '#8B4513', color: 'white', padding: '10px 0', '&:hover': { backgroundColor: '#5B3E2D' } }}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Typography variant='body1' sx={{ marginTop: 2, color: '#5B3E2D' }}>
            Create an account? 
            <Link to="/signin" style={{ color: '#5B3E2D', textDecoration: 'none', fontFamily: 'Merienda', fontWeight: 'bold' }}>SignIn</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
