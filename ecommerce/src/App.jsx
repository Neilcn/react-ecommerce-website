import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Category from './pages/Category';
import Cart from './pages/Cart';
import './App.css'

const App = () => {
  return ( 
  <div className="overflow-hidden">

      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
  </div>
  );
}


export default App;
