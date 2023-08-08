import { Box,Button,TextField,Typography } from '@mui/material'
import React, { useState } from 'react'
//import Head from '../../common/header/Head';
import Header from '../../common/header/Header';

const TeacherAuth = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
    };

    const resetState = () => {
        setIsSignup(!isSignup);
        setInputs({ name:"", university_code:"", email:"", phone:"", password:"" })
    }

  return (
    <div>
        <Header />
        <form onSubmit={handleSubmit}>
            <Box 
                display="flex" 
                flexDirection={"column"} 
                maxWidth={500} 
                alignItems="center" 
                justifyContent={'center'}
                margin="auto"
                marginTop={10}
                padding={5}
                borderRadius={5}
                boxShadow={"5px 5px 10px #ccc"}
                sx={{
                    ":hover": {
                        boxShadow: "10px 10px 20px #ccc",
                    },
                }}

            >
                <Typography variant='h2' padding={3} textAlign="center">
                    {isSignup ? "Signup" : "Login"}
                </Typography>
                    {isSignup && ( 
                    <TextField
                        onChange={handleChange}
                        name='name'
                        value={inputs.name}
                        margin='normal' 
                        type={'text'} 
                        variant='outlined' 
                        placeholder='Name' 
                    />
                    )}

                    {isSignup && (
                    <TextField
                        onChange={handleChange}
                        name='university_code'
                        value={inputs.university_code}
                        margin='normal' 
                        type={'text'} 
                        variant='outlined' 
                        placeholder='University Code' 
                    />
                    )}

                    <TextField 
                        onChange={handleChange}
                        name='email'
                        value={inputs.email}
                        margin='normal' 
                        type={'email'} 
                        variant='outlined' 
                        placeholder='Email'
                    />

                    {isSignup && (
                    <TextField 
                        onChange={handleChange}
                        name='phone'
                        value={inputs.phone}
                        margin='normal' 
                        type={'phone_no'} 
                        variant='outlined' 
                        placeholder='Phone No'
                    />
                    )}

                    <TextField 
                        onChange={handleChange}
                        name='password'
                        value={inputs.password}
                        margin='normal' 
                        type={'password'} 
                        variant='outlined' 
                        placeholder='Password'
                    />
    
                <Button type='submit'
                    sx={{ marginTop: 3, borderRadius: 3 }}
                    variant='contained' 
                    color='warning'
                >
                    {isSignup ? "Signup" : "Login"}
                </Button>
                <Button
                    onClick={resetState} 
                    sx={{ marginTop: 3, borderRadius: 3 }}
                >
                    Change to {isSignup ? "Login" : "Signup"}
                </Button>
            </Box>
        </form>
      
    </div>
  )
}

export default TeacherAuth
