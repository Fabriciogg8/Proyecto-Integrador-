import { useDispatch, useSelector } from 'react-redux'
import { jwtDecode } from 'jwt-decode'
import { onChecking, onLogin, onLogout, clearErrorMessage } from '../store/auth/authSlice'
import { REGISTER_USER_ENDPOINT, LOGIN_USER_ENDPOINT } from '../helpers/endpoints'
import { setAuthToken } from '../helpers/setAuthToken'


export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const startRegister = async ({ firstname, lastname, email, password }) => {
    dispatch(onChecking())
    try {
        const resp = await fetch(REGISTER_USER_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstname, lastname, email, password }),
        })
        if (!resp.ok) {
            // Si la respuesta no es exitosa, manejar el error
            const data = await resp.json()
            const error = data.error
            throw new Error (error)
        }
        const data = await resp.json()
        if (!data.access_token) {
            throw new Error('No se recibió el token de acceso')
        }
        localStorage.setItem('token', data.access_token)
        setAuthToken(data.access_token)
        const tokenDecoded = jwtDecode(data.access_token)
        dispatch(onLogin(tokenDecoded))
    } catch (error) {
        dispatch(onLogout(error.message, 'error'))
        setTimeout(() => {
            dispatch(clearErrorMessage())
        }, 1000)
    }
  }

    const startLogin = async ({ email, password }) => {
      dispatch(onChecking())
      try {
        const resp = await fetch(LOGIN_USER_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        })
        if (!resp.ok) {
          // Si la respuesta no es exitosa, manejar el error
          const data = await resp.json()
          const error = data.error
          throw new Error(error)
        }
        const data = await resp.json()
        if (!data.access_token) {
          throw new Error('No se recibió el token de acceso')
        }
        localStorage.setItem('token', data.access_token)
        setAuthToken(data.access_token)
        const tokenDecoded = jwtDecode(data.access_token)
        dispatch(onLogin(tokenDecoded))
      } catch (error) {
        dispatch(onLogout(error.message, 'error'))
        setTimeout(() => {
          dispatch(clearErrorMessage())
        }, 1000)
      }
    }

  const checkAuthToken =  () => {
    const token = localStorage.getItem('token')
    if (!token) {
      dispatch(onLogout())
      return
    }
    try {
      setAuthToken(token)
      const tokenDecoded = jwtDecode(token)
      dispatch(onLogin(tokenDecoded))
    const currentTime = Math.floor(Date.now() / 1000)
    if (tokenDecoded.exp < currentTime) {
        console.log('expirado') + localStorage.clear()
        dispatch(onLogout())
    }
    } catch (error) {
      console.log(error) + localStorage.clear()
      dispatch(onLogout())
    }
  }

    const startLogout = () => {
      localStorage.clear()
      dispatch(onLogout())
    }

  return {
    errorMessage,
    status,
    user,
    startRegister,
    checkAuthToken,
    startLogout, 
    startLogin
  }
}
