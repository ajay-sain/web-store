import { AccountCircle, VisibilityOff, Visibility, LockOpen } from '@mui/icons-material';
import { Box, Button, Container, CssBaseline, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import LoginImg from "../../static/images/login.png";

function ForgotPassword() {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
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
                <Typography variant='h5' textAlign="center" component="h5">
                    We are here to help you!
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ width:350}}>
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
                    <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 2, mb: 2 }} >
                        Send Reset Link
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

export default ForgotPassword;
