import React from 'react';
import './Home.css';

function Home({ setCurrentPage }) {
  const featuredAssets = [
    {
      id: 1,
      name: 'Luxury Penthouse Manhattan',
      type: 'Real Estate',
      price: '2,500,000',
      image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800',
      tokens: 10000,
      category: 'realestate'
    },
    {
      id: 2,
      name: 'Mona Lisa Replica by Master Artist',
      type: 'Fine Art',
      price: '850,000',
      image: 'https://images.pexels.com/photos/1109354/pexels-photo-1109354.jpeg?auto=compress&cs=tinysrgb&w=800',
      tokens: 5000,
      category: 'assets'
    },
    {
      id: 3,
      name: 'Rare 1952 Mickey Mantle Card',
      type: 'Collectables',
      price: '125,000',
      image: 'https://images.pexels.com/photos/6794954/pexels-photo-6794954.jpeg?auto=compress&cs=tinysrgb&w=800',
      tokens: 2500,
      category: 'assets'
    }
  ];

  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to AEQUITAS</h1>
          <p className="hero-subtitle">
            Tokenize and Trade High-Value Assets with Blockchain Technology
          </p>
          <p className="hero-description">
            Own fractional shares of real estate, fine art, and rare collectables.
            Built on blockchain for transparency, security, and accessibility.
          </p>
          <div className="hero-buttons">
            <button className="cta-button primary" onClick={() => setCurrentPage('assets')}>
              Explore Assets
            </button>
            <button className="cta-button secondary" onClick={() => setCurrentPage('portfolio')}>
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Why Choose AEQUITAS?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🏢</div>
            <h3>Real Estate</h3>
            <p>Invest in premium properties without buying the entire building</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Fine Art</h3>
            <p>Own shares of masterpieces and rare artistic collections</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💎</div>
            <h3>Collectables</h3>
            <p>Trade rare items from vintage cars to trading cards</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3>Blockchain Security</h3>
            <p>All transactions secured by Ethereum blockchain technology</p>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <h2 className="section-title">Featured Assets</h2>
        <div className="assets-grid">
          {featuredAssets.map(asset => (
            <div key={asset.id} className="asset-card">
              <img src={asset.image} alt={asset.name} className="asset-image" />
              <div className="asset-info">
                <span className="asset-type">{asset.type}</span>
                <h3 className="asset-name">{asset.name}</h3>
                <div className="asset-details">
                  <p className="asset-price">${asset.price} USD</p>
                  <p className="asset-tokens">{asset.tokens} tokens</p>
                </div>
                <button
                  className="view-button"
                  onClick={() => setCurrentPage(asset.category)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <h3 className="stat-number">$50M+</h3>
            <p className="stat-label">Total Assets Value</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">1,200+</h3>
            <p className="stat-label">Active Investors</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">150+</h3>
            <p className="stat-label">Listed Assets</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">24/7</h3>
            <p className="stat-label">Trading Available</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
