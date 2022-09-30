import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Account from '../pages/account';
import Auth from '../pages/auth';
import Brows from '../pages/brows';
import Cart from '../pages/cart';
import Home from '../pages/home';
import Product from '../pages/product';

function RootRoutr() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/auth' element={<Auth/>}></Route>
            <Route path='/brows' element={<Brows/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/account' element={<Account/>}></Route>
            <Route path='/p' element={<Product/>}></Route>
        </Routes>
    );
}

export default RootRoutr;
