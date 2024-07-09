
import React, { useState } from 'react';
import './AddCart.css';

function AddCart() {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    name: 'Sample Product',
    price: 19.99,
    description: 'This is a sample product description.',
    image: 'https://media.istockphoto.com/id/1420225668/photo/yogurt-with-granola-fruits-and-berries-on-a-clay-plate-with-a-wooden-spoon-yogurt-with.jpg?s=612x612&w=0&k=20&c=WHW4mimaootCkvlaHKH3_cVqSXZmSKB-U1xm9koQKqc='
  };

  const addToCart = () => {
    const updatedCart = [...cart, { ...product, quantity }];
    setCart(updatedCart);
    alert('Product added to cart!');
  };

  return (
    <div className="product-page">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <div className="quantity-selector">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1"
          />
        </div>
        <button className="add-to-cart-button" onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default AddCart;

