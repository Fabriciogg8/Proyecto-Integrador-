import { Routes, Route, Navigate } from 'react-router-dom'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import  Home  from '../pages/Home'
import { useAuthStore } from '../hooks/useAuthStore'
import  Header  from '../components/Header'
import Footer from '../components/Footer'
import { useEffect } from 'react'

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore()

  useEffect(() => {
    checkAuthToken()
  }, [status])

  if (status === 'checking') {
    return <h1>Checking...</h1>
  }

  return (
    <div className='app-container'>
      <Header/>
      <div className='main-container'>
        <Routes>
          {status === 'not-authenticated' ? (
            <>
              <Route path='/signin' element={<SignIn />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/' element={<Home />} />
            </>
          ) : (
            <>
              <Route path='/' element={<Home />} />
              <Route path='/*' element={<Navigate to='/' />} />
            </>
          )}

          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}
