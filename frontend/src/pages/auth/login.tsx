import { AccountCircle, VisibilityOff, Visibility, LockOpen } from '@mui/icons-material';
import { Box, Button, Container, CssBaseline, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import LoginImg from "../../static/images/login.png";

function Login() {

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
                    Welcome Back!
                </Typography>
                    <img src={LoginImg} alt="" className='login-image'/>
                <Box component="form" onSubmit={handleSubmit} sx={{ width:320}}>
                    <TextField margin="normal" required fullWidth variant="standard"
                            id="email" label="Email Address" size="small" type="email"
                            name="email" autoComplete="email" autoFocus 
                            InputProps={{
                                startAdornment:(
                                    <InputAdornment position="start">
                                        <AccountCircle/>
                                    </InputAdornment>
                                )
                            }}/>
                    <TextField margin="normal" required fullWidth variant="standard"
                            name="password" label="Password" size="small"
                            type={showPassword? "text" : "password"} id="password" autoComplete="current-password"
                            InputProps={{
                                startAdornment:(
                                    <InputAdornment position="start">
                                        <LockOpen/>
                                    </InputAdornment>
                                ),
                                endAdornment:(
                                    <InputAdornment position="end">
                                        <IconButton onClick={()=>setShowPassword(!showPassword)}
                                                aria-label="toggle password visibility">
                                            {showPassword? <Visibility/> : <VisibilityOff/>}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}/>
                    <Box sx={{marginTop:4, 
                        textAlign:"right",
                        color:"secondary"}} >
                            <span color="secondary">Forgot password?</span>
                    </Box>
                    <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 2, mb: 2 }} >
                        Sign In
                    </Button>
                    <Box sx={{mb:1, 
                    verticalAlign: "center",
                        textAlign:"center"}} >
                            <Typography variant="body2" component="p">Don't have an account? 
                                <Button size="small"
                                        variant="outlined"
                                        color="primary"
                                        sx={{ margin:1}} >
                                    Sign Up
                                </Button>
                            </Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Login;
