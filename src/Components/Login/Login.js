import { Button, Container, TextField, Typography, Alert, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';


const Login = () => {
    const [loginData, setLoginData] = useState([])
    const {user, error, logInUser, isLoading} = useAuth();

    const location = useLocation();
    const history = useHistory()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleOnSubmit = e => {
        logInUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
        e.target.reset()
    }
    return (
        <div>
            <Navigation></Navigation>
          <Container>
          <Typography variant='h4' className='service-title' sx={{ my : 8, fontWeight : 600}}>
               Please Log In
               {
                   user?.email && <Alert sx={{width : '50%', ml : 35}} severity="success">User Successfully added</Alert>
               }
               {
                   error && <Alert sx={{width : '50%', ml : 35}} severity="error">User not a vaid</Alert>
               }
           </Typography>  
           {
              !isLoading && <form onSubmit={handleOnSubmit}>
           <TextField
           sx={{width : '50%', m : 1}}
            id="standard-basic"
            label="Enter Your Email"
            name="email"
            onBlur={handleOnBlur}
            variant="standard"
             />
             <br />
           <TextField
           sx={{width : '50%', m : 1}}
            id="standard-basic"
            label="Enter Your Password"
            name="password"
            onBlur={handleOnBlur}
            type='password'
            variant="standard"
             />
             <br />
            <Button type='submit' sx={{width : '50%', mt : 3}} variant='contained'>Log In</Button>
            <Typography variant='body1' sx={{mt : 3}}>
                Don't Have Account? <Link to='/register'>Please Register</Link>
            </Typography>
           </form>}
           {
               isLoading && <CircularProgress color='success' />
           }
            </Container> 
            <Footer></Footer>
        </div>
    );
};

export default Login;