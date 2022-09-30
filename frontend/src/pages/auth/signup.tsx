import { VisibilityOff, Visibility } from '@mui/icons-material';
import { Box, Button, Container, CssBaseline, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import LoginImg from "../../static/images/login.png";

function Signup() {

    let [showPassword, setShowPassword] = useState<boolean>(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }} >
                <Typography variant='h4' textAlign="center" component="h3">
                    Welcome
                </Typography>
                    <img src={LoginImg} alt="" className='login-image'/>
                <Box component="form" onSubmit={handleSubmit} sx={{ width:350}}>
                    <TextField margin="normal" required fullWidth variant="standard"
                            id="name" label="Full Name" size="small" type="text"
                            name="name" autoComplete="name" autoFocus />
                    <TextField margin="normal" required fullWidth variant="standard"
                            id="email" label="Email Address" size="small" type="email"
                            name="email" autoComplete="email" autoFocus />
                    <TextField margin="normal" required fullWidth variant="standard"
                            name="password" label="Password" size="small"
                            type={showPassword?"text":"password"} id="password" autoComplete="current-password"
                            InputProps={{
                                endAdornment:(
                                    <InputAdornment position="start">
                                        <IconButton onClick={()=>setShowPassword(!showPassword)}
                                                aria-label="toggle password visibility">
                                            {showPassword? <Visibility/> : <VisibilityOff/>}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}/>
                    <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 2, mb: 2 }} >
                        Sign Up
                    </Button>
                    <Box sx={{mb:1, 
                    verticalAlign: "center",
                        textAlign:"center"}} >
                            <Typography variant="body2" component="p">Have an account? 
                                <Button size="small"
                                        variant="outlined"
                                        color="primary"
                                        sx={{ margin:2}} >
                                    Sign In
                                </Button>
                            </Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Signup;