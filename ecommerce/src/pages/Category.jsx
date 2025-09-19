import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import ProductCard from "../components/Productcard";
import ToutCard from "../components/ToutCard";
import touts from "../data/touts";

import { CartContext } from "../contexts/CartContext";

const Category = () => {
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");

  // Get all categories
  const categories = [
    "all",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];

  // Calculate total items in cart
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Filter by category
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Sort products by title
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  return (
    <div>
      <div className="flex items-right justify-end p-4">
        <div
          className="top-8 right-6 z-10 flex items-center cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 11V7a4 4 0 10-8 0v4M5 8h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2z"
            />
          </svg>
          <span className="ml-1 bg-red-500 text-white rounded-full px-2 py-0.5 text-xs font-bold h-5">
            {cartCount}
          </span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center p-4 gap-4 mt-8">
        <div className="flex justify-start w-full sm:w-auto">
          <label className="w-30 sm:w-auto">Category:</label>
          <select
            className="ml-2 p-1 border border-gray-300 rounded w-full sm:w-auto"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-start w-full sm:w-auto">
          <label className="w-30 sm:w-auto">Sort:</label>
          <select
            className="ml-2 p-1 border border-gray-300 rounded w-full sm:w-auto sm:w-auto"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
        {sortedProducts.map((product, index) => (
          <React.Fragment key={product.id}>
            <ProductCard product={product} />
            {(index + 1) % 3 === 0 && touts[Math.floor(index / 3)] && (
              <ToutCard
                key={`tout-${touts[Math.floor(index / 3)].id}`}
                tout={touts[Math.floor(index / 3)]}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Category;
