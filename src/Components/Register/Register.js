import { Button, Container, TextField, Typography, Alert, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';


const Register = () => {
    const [loginData, setLoginData] = useState([])
    const {user, registerUser, error, isLoading} = useAuth()

    const history = useHistory()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleOnSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert("your Password didn't match")
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        
        e.preventDefault()
        e.target.reset()
    }
    return (
        <div>
            <Navigation></Navigation>
            <Container>
          <Typography variant='h4' className='service-title' sx={{ my : 8, fontWeight : 600}}>
               Please Register
           </Typography>  
           {
              !isLoading && <form onSubmit={handleOnSubmit}>
               {
                   user?.email && <Alert severity="success" sx={{width : '50%', ml : 35}}>User Successfully added</Alert>
               }
               {
                   error && <Alert  sx={{width : '50%', ml : 35}} severity="error">User not a vaid</Alert>
               }
           <TextField
            sx={{width : '50%', m : 1}}
            id="standard-basic"
            label="Enter Your Name"
            name="name"
            onBlur={handleOnBlur}
            variant="standard"
             />
             <br />
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
           <TextField
            sx={{width : '50%', m : 1}}
            id="standard-basic"
            label="Confirm Password"
            name="password2"
            onBlur={handleOnBlur}
            type='password'
            variant="standard"
             />
             <br />
            <Button type='submit' sx={{width : '50%', mt : 3}} variant='contained'>Register</Button>
            <Typography variant='body1' sx={{mt : 3}}>
                Already Have Account? <Link to='/logIn'>Please Login</Link>
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

export default Register;