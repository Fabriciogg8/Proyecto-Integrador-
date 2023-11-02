import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Buscador from './Buscador'

const Layout = () => {

    return (
        <div>
            <Header/>
            <Outlet/>
            <Buscador/>
            <Footer/>
        </div>
    )
}

export default Layout;
