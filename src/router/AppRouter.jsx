import { Routes, Route, Navigate } from 'react-router-dom'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import Home from '../pages/Home'
import { useAuthStore } from '../hooks/useAuthStore'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { ProductDetails } from '../pages/ProductDetails'
import Resultados from '../pages/Resultados'
import { AdminPanel } from '../pages/AdminPanel'
import  SearchResults  from '../pages/SearchResults'


export const AppRouter = () => {
  const { status, user, checkAuthToken } = useAuthStore()
  

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
              <Route path='/signup' element={<SignUp />} />
              <Route path='/productdetails/:id' element={<ProductDetails />} />
              <Route path='/resultados' element={<SearchResults/>} />
            </>
          ) : (
            <>
              <Route path='/*' element={<Home />} />
              <Route path='/productdetails/:id' element={<ProductDetails />} />
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
