import React from 'react';
import Paper from '@mui/material/Paper';
import { Box, createTheme, Grid, Rating, ThemeProvider, Typography } from '@mui/material';
import './style.css';
import { red } from '@mui/material/colors';
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
                        justifyContent: "center",
                        color: red[600],
                        fontSize: 12,
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

function ProductCard() {

    return (
        <Grid item xs="auto" sx={{mb:3}}>
        <Link to="/p/983759348" >
            <ThemeProvider theme={theme}>
                <Paper elevation={3} sx={{width:250}}>
                    <img className='product-image' 
                    src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/xlatest3.jpg.pagespeed.ic.weRwbGvwtF.webp" 
                    alt="Image" />
                    <Box padding={1}>
                        <Typography variant='subtitle1' component="h2">
                            Cashmere Tank + Bag
                        </Typography>
                        {/* <Box sx={{display: "flex", alignItems:"centert",marginTop:3}}>
                            <AccessTime sx={{width:12.5}}/>
                            <Typography variant='subtitle2' component="p" marginLeft={0.5}>
                                5 hours
                            </Typography>
                        </Box> */}
                        <Box sx={{display: "flex", alignItems:"centert",mt:2}}>
                            <Rating name="read-only" value={2.5} precision={0.5} readOnly size='small'/>
                            <Typography variant='body1' component="p" marginLeft={0.5}>
                                4.5
                            </Typography>
                            <Box sx={{ flexGrow: 1 }} />
                            <Typography variant='body2' component="p" marginLeft={0}>
                                (890 reviews)
                            </Typography>
                        </Box>
                        <Box sx={{
                                    display: "flex",
                                    textAlign:"center",
                                    justifyContent: "center"
                                }}>
                            <Typography variant='h6' component="h3" marginTop={0} color="primary">
                                500/-
                            </Typography>

                            <Typography variant='subtitle2' component="span" marginLeft={0.5}>
                                    <del>700/-</del>
                                </Typography>
                        </Box>
                    </Box>
                </Paper>
            </ThemeProvider>
            </Link>
        </Grid>
    );
}

export default ProductCard;
