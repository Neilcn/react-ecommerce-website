import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);
  const { id, title, image, price, quantity } = item;
  return (
    <div className="grid grid-cols-3 items-center gap-4 p-4 mb-2">
      {/* Left: Image */}
      <div className="flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-20 h-20 object-contain rounded"
        />
      </div>
      {/* Center: Title and Quantity */}
      <div className="flex flex-col">
        <span className="font-semibold mb-2 text-left">{title}</span>
        <div className="flex items-center gap-2">
          <button onClick={() => decreaseQuantity(id)} className="px-2 py-1 ">
            -
          </button>
          <span className="px-2 font-bold">{quantity}</span>
          <button onClick={() => increaseQuantity(id)} className="px-2 py-1 ">
            +
          </button>
        </div>
      </div>
      {/* Right: Price and Remove */}
      <div className="flex flex-col items-end h-full justify-between">
        <span className="font-bold text-lg mb-2">${price.toFixed(2)}</span>
        <button
          onClick={() => removeFromCart(id)}
          className="text-red-500 px-3 py-1 text-xs uppercase underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
