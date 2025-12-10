import { BrowserRouter } from 'react-router';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvide } from './context/AuthContext.jsx';
import { FavoritesProvider } from './context/FavContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvide>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </AuthProvide>
  </BrowserRouter>
)
