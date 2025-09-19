import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const itemCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center px-3 py-2 bg-white border border-gray-200 rounded-md hover:bg-gray-50 text-gray-700 font-medium shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Continue shopping
          </button>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Your Cart ({itemCount})
          </h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <p className="text-gray-600 mb-4">Your cart is empty.</p>
            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Browse products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            <div className="lg:col-span-2 bg-white rounded-lg shadow-sm divide-y divide-gray-200">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <aside className="bg-white rounded-lg shadow-sm p-6 h-fit">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Items</span>
                <span>{itemCount}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-4">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700">
                Checkout
              </button>
              <p className="text-xs text-gray-500 mt-3">
                Taxes and shipping calculated at checkout.
              </p>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
