import React from 'react';
import Paper from '@mui/material/Paper';
import { Box, Button, createTheme, Grid, Rating, ThemeProvider, Typography } from '@mui/material';
import './style.css';
import { AccessTime } from '@mui/icons-material';
import { Catagory } from '../../pages/home/models';
import { Link } from 'react-router-dom';

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2",
                    },
                    style: {
                        fontSize: 12,
                    }
                },
                {
                    props: {
                        variant: "subtitle2",
                    },
                    style: {
                        display:"flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }
                },
                {
                    props: {
                        variant: "h6",
                    },
                    style: {
                        color: "#008c6a"
                    }
                }
            ]
        }
    }
});

function CatagoryBaner({keyEnum,value,url}: Catagory) {
    return (
        <Grid item xs>
            <ThemeProvider theme={theme}>

                <Paper elevation={6} sx={{
                    backgroundImage: `url(${url})`,
                    backgroundSize: "cover",
                    height: 300,
                    minWidth: 500}}>
                        <Box padding={1}>
                            <Typography variant='h2' component="h2">
                                {value}
                            </Typography>
                            <Box sx={{display: "flex", alignItems:"centert",marginTop:0}}>
                                <Link to={`/brows?catagory=${value.toLowerCase()}`} ><Button variant="contained" size="small" color="primary">Shop Now</Button></Link>
                            </Box>
                        </Box>
                    </Paper>
            </ThemeProvider>
        </Grid>
    );
}

export default CatagoryBaner;
