import { Grid } from '@mui/material';
import React from 'react';
import CatagoryBaner from '../../component/catagory-baner';
import Header from '../../component/header';
import { categoryist } from './models';

function Home() {
    return (
        <>
        <Header/>
        <Grid container spacing={2} >
            {categoryist.map( catagory => (
                <CatagoryBaner key={catagory.key} keyEnum={catagory.key} value={catagory.value} url={catagory.url}/>
            ))}
            <a href="https://www.freepik.com/free-photo/organic-fresh-vegetables-white-background-flat-lay_31431724.htm#query=grocery%20banner&position=35&from_view=keyword">Image by pvproductions</a> on Freepik
        </Grid>
        </>
    );
}

export default Home;
