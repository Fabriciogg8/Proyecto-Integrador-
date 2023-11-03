import React from 'react';
import { Outlet } from 'react-router-dom';


import Home from '../screens/home';

import Footer from './Footer';
import Header from './Header';
import Buscador from './Buscador'


const Layout = () => {

    return (
        <div>
            <Outlet/>
            <Home/>
            <Buscador/>
            <Footer/>
        </div>
    )
}

export default Layout;
