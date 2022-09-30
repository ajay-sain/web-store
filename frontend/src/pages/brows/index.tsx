import { Grid } from '@mui/material';
import React from 'react';
import Header from '../../component/header';
import ProductCard from '../../component/product-card';

function Brows() {
    return (
        <>
        <Header/>
        <Grid container spacing={1} sx={{justifyContent:"center"}}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </Grid>
        </>
    );
}

export default Brows;
