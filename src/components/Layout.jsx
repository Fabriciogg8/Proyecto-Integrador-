import React from 'react';
import { Outlet } from 'react-router-dom';

import Home from '../screens/home';

const Layout = () => {

    return (
        <div>
            <Outlet/>
            <Home/>
        </div>
    )
}

export default Layout;
