import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
    //destructure product details
    const { id, title, image, price } = product;
  return (
    <div className="flex flex-col p-4 h-full" key={product.id} style={{ backgroundColor: '#faf8f5' }}>
      <img src={image} alt={title} className="w-full h-48 object-contain mb-4" />
      <h2 className="text-sm font-semibold text-left leading-4">{title}</h2>
      <p className="text-sm text-gray-600 text-left">${price}</p>
      <div className="mt-auto">
        <Link to="/cart">
          <button 
            className="btn-ecom mt-8"
            onClick={() => addToCart(product, id)}>
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;