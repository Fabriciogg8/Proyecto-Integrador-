import './App.css'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from './components/Product/ProductDetail'
import Layout from './components/Layout';

import Footer from './components/Footer';
import Header from './components/Header';

const App = () => { 
  return ( 
    <BrowserRouter>
      <Header/>
        <Routes>
          {/* agregar element={} a cada ruta con su archivo correspondiente*/}
          <Route path="/" element={<Layout/>}></Route>
            <Route path="products/:id" element={<ProductDetail/>}></Route>
            {
            /* <Route index />
            <Route path="products">
              <Route path="/:id" />
              <Route path="/collections/:name" />
            </Route>
            <Route path="account">
              <Route path="/login"/>
              <Route path="/register"/>
              <Route path="/forgot-password"/>
              <Route path="/user/:id"/>
              <Route path="/admin/:id"/>
            </Route> */}
          
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
