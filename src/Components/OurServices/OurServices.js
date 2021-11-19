import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import './OurServices.css'

const OurServices = () => {
  return (
    <Container>
      <Typography variant='h3' sx={{ my: 8, fontWeight: 600 }}>
        Our Services
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
          <Grid item xs={12} sm={12} md={4}>
            <Paper elevation={3} sx={{ py: '30px', px: 4 }} >
              <Typography variant='h5'>
                <i class="fas fa-motorcycle" style={{ fontSize: '70px', color: 'gray' }}></i>
              </Typography>
              <Typography variant='h5' sx={{ fontWeight: 600, my: 2 }}>
                Largest Dealership of bike
              </Typography>
              <Typography variant='body1' sx={{ letterSpacing: 1 }}>
                MotorLand is nisi aliquip ex consequat duis velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Paper elevation={3} sx={{ py: '30px', px: 4 }} >
              <Typography variant='h5'>
                <i class="fas fa-cogs" style={{ fontSize: '70px', color: 'gray' }}></i>
              </Typography>
              <Typography variant='h5' sx={{ fontWeight: 600, my: 2 }}>
                We Offers Lower Bike Prices
              </Typography>
              <Typography variant='body1' sx={{ letterSpacing: 1 }}>
                MotorLand is nisi aliquip ex consequat duis velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Paper elevation={3} sx={{ py: '30px', px: 4 }} >
              <Typography variant='h5'>
                <i class="fas fa-tools" style={{ fontSize: '70px', color: 'gray' }}></i>
              </Typography>
              <Typography variant='h5' sx={{ fontWeight: 600, my: 2 }}>
                Multipoint Safety Checks
              </Typography>
              <Typography variant='body1' sx={{ letterSpacing: 1 }}>
                MotorLand is nisi aliquip ex consequat duis velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default OurServices;