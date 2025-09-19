import React, { useEffect } from 'react';
import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Load cart from localStorage on mount
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem('cartItems');
    return stored ? JSON.parse(stored) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, id) => {
    const newItem = { ...product, quantity: 1 };
    const cartItemExists = cartItems.some(item => item.id === id);
    if (cartItemExists) {
      const newCart = [...cartItems].map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
      setCartItems(newCart);
    } else {
      setCartItems([...cartItems, newItem]);
    }
  };


  const removeFromCart = (itemId) => {
    setCartItems((cartItems) => cartItems.filter(item => item.id !== itemId));
  };

  const increaseQuantity = (itemId) => {
    setCartItems((cartItems) =>
      cartItems.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((cartItems) =>
      cartItems.map(item =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;