import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { ProductContextProvider } from '../src/conexts/ProductContext'
import { ReservaContextProvider } from '../src/conexts/ReservaContext'
import './App.css'
import './index.css'

const App = () => {
  return (
    <Provider store={store}>
      <ReservaContextProvider>
        <ProductContextProvider>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </ProductContextProvider>
      </ReservaContextProvider>
    </Provider>
  )
}

export default App
