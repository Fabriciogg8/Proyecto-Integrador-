import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='app-container'>
          <Header />
          <AppRouter />
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
