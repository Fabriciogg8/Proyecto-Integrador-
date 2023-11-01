import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import ProductDetail from './Product/ProductDetail';
import CardProduct from './CardProduct';

const Layout = () => {

    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
            <ProductDetail/>
        </div>
    )
}

export default Layout;
