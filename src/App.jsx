import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignIn } from './components/pages/SignIn'
import { SignUp } from './components/pages/SignUp'
import Header from './components/Header'
import Footer from './components/Footer'
import Layout from './components/Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
