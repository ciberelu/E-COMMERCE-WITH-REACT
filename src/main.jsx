
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltrosContextoProvider } from './context/FiltersContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltrosContextoProvider>
    <App />
  </FiltrosContextoProvider>
)
