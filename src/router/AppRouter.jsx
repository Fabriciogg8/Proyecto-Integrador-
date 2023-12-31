import { Routes, Route, Navigate } from 'react-router-dom';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import Home from '../pages/Home';
import { useAuthStore } from '../hooks/useAuthStore';
import Header from '../components/header/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import ProductDetails from '../pages/ProductDetails';
import Resultados from '../pages/Resultados';
import { AdminPanel } from '../pages/AdminPanel';
import SearchResults from '../pages/SearchResults';
import Reservas from '../pages/Reservas';
import { SignInReserva } from '../pages/SignInReserva'; 
import FavouritesList from '../components/product/FavouritesList'
import ReservasList from '../components/product/ReservasList'
import Nosotros from '../pages/Nosotros';


export const AppRouter = () => {
  const { status, user, checkAuthToken } = useAuthStore()

  useEffect(() => {
    checkAuthToken()
  }, [status])

  if (status === 'checking') {
    return <h1>Checking...</h1>
  }

  return (
    <div className='app-container'>
      <Header />
      <div className='main-container'>
        <Routes>
          {status === 'not-authenticated' ? (
            <>
              <Route path='/*' element={<Home />} />
              <Route path='/signin' element={<SignIn />} />
              <Route path='/signinReserva' element={<SignInReserva />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/productdetails/:id' element={<ProductDetails />} />
              <Route path='/resultados' element={<SearchResults />} />
              <Route path='/reservas/:id' element={<Reservas />} />
              <Route path='/nosotros' element={<Nosotros />} />
            </>
          ) : (
            <>
              <Route path='/*' element={<Home />} />
              <Route path='/productdetails/:id' element={<ProductDetails />} />
              <Route path='/resultados' element={<SearchResults />} />
              <Route path='/favourites' element={<FavouritesList />} />
              <Route path='/reservas' element={<ReservasList />} />
              <Route path='/reservas/:id' element={<Reservas />} />
              <Route path='/nosotros' element={<Nosotros />} />
              {user.role === 'ADMIN' ? (
                <Route path='/admin-panel/*' element={<AdminPanel />} />
              ) : (
                <Route path='/admin-panel/*' element={<Navigate to='/' />} />
              )}
            </>
          )}
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
