import React, { useState } from 'react'; 
import Chocolate from '../Assets/chocolate.png';
import { Box, FormControl, FormHelperText, InputLabel, Typography, OutlinedInput, Button, IconButton, InputAdornment } from '@mui/material';
import { Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const SignInPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: false }); 
  };

  const handleSignIn = () => {
    const newErrors = {
      name: !formData.name,
      email: !formData.email,
      password: !formData.password,
      confirmPassword: !formData.confirmPassword,
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match!');
    } else {
      setPasswordError('');
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
        <Typography variant="h1" sx={{color: '#5B3E2D', fontWeight: 'bold', fontSize: { xs: '26px', sm: '30px', md: '36px' }, fontFamily: 'Merienda', textAlign: 'center', marginBottom: 1 }}>
          Create Account
        </Typography>

        <Box sx={{ padding: { xs: 2, sm: 3 } }}>
          <FormControl fullWidth variant="outlined" sx={{ marginBottom: 1 }} error={errors.name}>
            <InputLabel htmlFor="name">Name</InputLabel>
            <OutlinedInput 
              id="name" 
              label="Name" 
              value={formData.name} 
              onChange={handleInputChange}
            />
            <FormHelperText>{errors.name ? 'Name is required' : 'Enter Your Name'}</FormHelperText>
          </FormControl>

          <FormControl fullWidth variant="outlined" sx={{ marginBottom: 1 }} error={errors.email}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <OutlinedInput 
              id="email" 
              label="Email" 
              value={formData.email}
              onChange={handleInputChange}
            />
            <FormHelperText>{errors.email ? 'Email is required' : 'Enter Your Email Address'}</FormHelperText>
          </FormControl>

          <FormControl fullWidth variant="outlined" sx={{ marginBottom: 1 }} error={errors.password}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput 
              id="password" 
              type={showPassword ? 'text' : 'password'} 
              label="Password" 
              value={formData.password}
              onChange={handleInputChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText>{errors.password ? 'Password is required' : 'Enter Your Password'}</FormHelperText>
          </FormControl>

          <FormControl fullWidth variant="outlined" sx={{ marginBottom: 1 }} error={errors.confirmPassword}>
            <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
            <OutlinedInput 
              id="confirmPassword" 
              type={showConfirmPassword ? 'text' : 'password'} 
              label="Confirm Password" 
              value={formData.confirmPassword}
              onChange={handleInputChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end">
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText>{errors.confirmPassword ? 'Confirmation is required' : 'Enter Your Password to Confirm'}</FormHelperText>
            {passwordError && <Typography color="error" variant="body2">{passwordError}</Typography>}
          </FormControl>

          <Button 
            variant="contained" 
            sx={{ marginTop: 2, width: '100%', backgroundColor: '#8B4513', color: 'white', padding: '10px 0', '&:hover': { backgroundColor: '#5B3E2D' } }}
            onClick={handleSignIn}
          >
            Sign In
          </Button>
          <Typography variant="body1" sx={{ marginTop: 2, color: '#5B3E2D' }}>
            Have an account? 
            <Link to="/" style={{ color: '#5B3E2D', textDecoration: 'none', fontFamily: 'Merienda', fontWeight: 'bold' }}>Login</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SignInPage;
