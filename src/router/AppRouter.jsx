import { Routes, Route, Navigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { Layout } from '../pages/Layout'
import { useAuthStore } from '../hooks/useAuthStore'
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
    <>
      <Container>
        <Routes>
          {status === 'not-authenticated' ? (
            <>
              <Route path='/signin' element={<SignIn />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/' element={<Layout />} />
            </>
          ) : (
            <>
              <Route path='/' element={<Layout />} />
              <Route path='/*' element={<Navigate to='/' />} />
            </>
          )}

          <Route path='/*' element={<Navigate to='/auth/' />} />
        </Routes>
      </Container>
    </>
  )
}
