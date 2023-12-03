import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import { Provider } from 'react-redux'
import { store } from './store/store'
import {ProductContextProvider} from './conexts/ProductContext'
import './App.css'



const App = () => {
  return (
    <Provider store={store}>
      <ProductContextProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ProductContextProvider>
    </Provider>
  )
}

export default App
