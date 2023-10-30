import './App.css'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';

const App = () => { 
  return ( 
    <BrowserRouter>
      <Routes>
        {/* agregar element={} a cada ruta con su archivo correspondiente*/}
        <Route path="/" element={<Layout/>}>
          {/* <Route index />
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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
