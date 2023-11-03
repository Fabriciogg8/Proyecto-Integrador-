import ReactDOM from 'react-dom/client'
import App from './App'
import ContextProvider from './components/global.context';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <ContextProvider>
      <App/>
    </ContextProvider>
    
  </>
);

