import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import ProductProvider from './contexts/ProductContext';
import CartProvider from './contexts/CartContext';

createRoot(document.getElementById('root')).render(
  
  <ProductProvider>
    <CartProvider>
      <StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StrictMode>
    </CartProvider>
  </ProductProvider>,
)
