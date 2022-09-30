import { createTheme, Grid, Paper, ThemeProvider, Typography } from '@mui/material';
import React, { useState } from 'react';
import './style.css';
import Login from './login';
import Logo from "../../static/images/logo.svg";
import { blue, purple } from '@mui/material/colors';
import Signup from './signup';
import ForgotPassword from './ForgotPassword';

const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: blue[900],
        },
        secondary: {
            // This is green.A700 as hex.
            main: purple[500],
        },
    },
    components: {
        MuiTypography :{
            variants: [
                {
                    props: {
                        variant: "subtitle1"
                    },
                    style: {
                        fontWeight: 600
                    }
                }
            ]
        }
    }
});

function Auth() {

    const {innerWidth, innerHeight} = window;

    return (
        <Grid container 
                direction="column"
                justifyContent="center"
                alignItems="center" >
            <ThemeProvider theme={theme}>
                <Grid item xs={1} md={6}>
                    <Paper elevation={innerWidth > 500? 3 : 0} >
                        <Grid container direction="row" 
                                justifyContent="space-between"
                                alignItems="center" spacing={2}>
                            <Grid item textAlign="center" xs={4} md={3}>
                                <img src={Logo} alt="" className='logo'/>
                            </Grid>
                            <Grid textAlign="center" item xs={4} md={4}>
                                <Typography variant="subtitle1" color="primary" component="span">Web Store</Typography>
                            </Grid>
                        </Grid>
                        <Login/>
                        {/* <Signup/> */}
                        {/* <ForgotPassword/> */}
                    </Paper>
                </Grid>
            </ThemeProvider>
        </Grid>
    );
}

export default Auth;
