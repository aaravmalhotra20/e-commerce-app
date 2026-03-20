import React from 'react';
import '../styles/Products.css';

function Products() {
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: '$79.99',
      originalPrice: '$129.99',
      rating: 4.5,
      image: '🎧',
      category: 'Electronics'
    },
    {
      id: 2,
      name: 'Premium Watch',
      price: '$149.99',
      originalPrice: '$199.99',
      rating: 4.8,
      image: '⌚',
      category: 'Accessories'
    },
    {
      id: 3,
      name: 'Designer T-Shirt',
      price: '$29.99',
      originalPrice: '$49.99',
      rating: 4.3,
      image: '👕',
      category: 'Fashion'
    },
    {
      id: 4,
      name: 'Comfort Sneakers',
      price: '$89.99',
      originalPrice: '$139.99',
      rating: 4.6,
      image: '👟',
      category: 'Fashion'
    },
    {
      id: 5,
      name: 'Smart Water Bottle',
      price: '$39.99',
      originalPrice: '$59.99',
      rating: 4.4,
      image: '💧',
      category: 'Home'
    },
    {
      id: 6,
      name: 'Portable Speaker',
      price: '$59.99',
      originalPrice: '$99.99',
      rating: 4.7,
      image: '🔊',
      category: 'Electronics'
    },
    {
      id: 7,
      name: 'Laptop Backpack',
      price: '$44.99',
      originalPrice: '$74.99',
      rating: 4.5,
      image: '🎒',
      category: 'Accessories'
    },
    {
      id: 8,
      name: 'Sunglasses',
      price: '$54.99',
      originalPrice: '$89.99',
      rating: 4.6,
      image: '🕶️',
      category: 'Accessories'
    }
  ];

  return (
    <section id="products" className="products">
      <div className="products-container">
        <div className="products-header">
          <h2 className="products-title">Top Selling Products</h2>
          <p className="products-subtitle">
            Check out our most popular items this season
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <span className="product-emoji">{product.image}</span>
                <div className="product-badge">Sale</div>
              </div>
              <div className="product-content">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-rating">
                  <span className="stars">★ {product.rating}</span>
                </div>
                <div className="product-prices">
                  <span className="price">{product.price}</span>
                  <span className="original-price">{product.originalPrice}</span>
                </div>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
