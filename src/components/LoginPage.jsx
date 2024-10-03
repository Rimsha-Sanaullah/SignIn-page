import React from 'react';
import Chocolate from '../Assets/chocolate.png';
import { Box, FormControl, FormHelperText, InputLabel, Typography, OutlinedInput, Button } from '@mui/material';

const LoginPage = () => {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: {
          xs: '90%', 
          sm: '70%',  
          md: '50%',  
          lg: '400px' 
        },
        margin: 'auto',
        padding: 0,  // No padding for the main box
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
          height: 'auto',
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
          padding: '0 16px', // Add horizontal padding only to the inner box
          marginTop: '-100px',
        }}
      >
        <Typography variant="h3" sx={{ fontSize: { xs: '16px', md: '20px' }, fontFamily: 'Merienda', textAlign: 'center', marginBottom: 0.5 }}>
          Hi there,
        </Typography>
        <Typography variant="h1" sx={{ fontSize: { xs: '24px', md: '32px' }, fontFamily: 'Merienda', textAlign: 'center', marginBottom: 1 }}>
          Welcome Back
        </Typography>

        <Box sx={{padding: 3}}>
            <FormControl fullWidth variant="outlined" sx={{ marginBottom: 1 }}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput
                id="email"
                label="Email"
              />
              <FormHelperText>Enter Your Email Address</FormHelperText>
            </FormControl>

            <FormControl fullWidth variant="outlined" sx={{ marginBottom: 1 }}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                type="password"
                label="Password"
              />
              <FormHelperText>Enter Your Password</FormHelperText>
            </FormControl>

            <Button 
              variant="contained" 
              sx={{ 
                marginTop: 2, 
                width: '100%', 
                backgroundColor: '#8B4513', 
                color: 'white',
                padding: '10px 0', // Adjust vertical padding
                '&:hover': {
                  backgroundColor: '#5B3E2D' 
                }
              }}
            >
            Sign In
            </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginPage;
