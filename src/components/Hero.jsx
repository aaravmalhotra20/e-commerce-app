import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to ShopHub</h1>
          <p className="hero-subtitle">
            Discover amazing products at unbeatable prices
          </p>
          <p className="hero-description">
            Shop the latest trends in fashion, electronics, home & garden, and more.
            Free shipping on orders over $50!
          </p>
          <button className="hero-btn">Shop Now</button>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">
            <span>Featured Products</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
