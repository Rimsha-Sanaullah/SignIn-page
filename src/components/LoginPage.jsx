import React from 'react'; 
import Chocolate from '../Assets/chocolate.png';
import { Box, FormControl, FormHelperText, InputLabel, Typography, OutlinedInput, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const LoginPage = () => {
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
          height: { xs: '180px', sm: '200px', md: 'auto' }, // Adjust height for smaller screens
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
          marginTop: '-100px', // Reduce the overlap on smaller screens
        }}
      >
        <Typography variant="h3" sx={{color: '#5B3E2D', fontSize: { xs: '18px', sm: '20px', md: '24px' }, fontFamily: 'Merienda', textAlign: 'center', marginBottom: 0.5 }}>
          Hi there,
        </Typography>
        <Typography variant="h1" sx={{color: '#5B3E2D',fontWeight: 'bold', fontSize: { xs: '26px', sm: '30px', md: '36px' }, fontFamily: 'Merienda', textAlign: 'center', marginBottom: 1 }}>
          Welcome Back
        </Typography>

        <Box sx={{ padding: { xs: 2, sm: 3 } }}>
          <FormControl fullWidth variant="outlined" sx={{ marginBottom: 2 }}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <OutlinedInput id="email" label="Email" />
            <FormHelperText>Enter Your Email Address</FormHelperText>
          </FormControl>

          <FormControl fullWidth variant="outlined" sx={{ marginBottom: 2 }}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput id="password" type="password" label="Password" />
            <FormHelperText>Enter Your Password</FormHelperText>
          </FormControl>

          <Button 
            variant="contained" 
            sx={{ marginTop: 3, width: '100%', backgroundColor: '#8B4513', color: 'white', padding: '10px 0', '&:hover': { backgroundColor: '#5B3E2D' } }}
          >
            Login
          </Button>
          <Typography variant='body1' sx={{ marginTop: 2, color: '#5B3E2D' }}>
            Create an account? 
            <Link to="/signin" style={{ color: '#5B3E2D', textDecoration: 'none',fontFamily: 'Merienda', fontWeight: 'bold' }}>SignIn</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
