import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
