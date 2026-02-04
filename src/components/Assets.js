import React, { useState } from 'react';
import './Assets.css';

function Assets({ walletAddress }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAsset, setSelectedAsset] = useState(null);

  const allAssets = [
    {
      id: 1,
      name: 'The Starry Night Replica',
      category: 'Fine Art',
      price: '750,000',
      pricePerToken: '150',
      tokens: 5000,
      availableTokens: 2300,
      image: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Authenticated replica of Van Gogh\'s masterpiece',
      artist: 'Master Replicator Studios'
    },
    {
      id: 2,
      name: 'Ancient Roman Coin Collection',
      category: 'Collectables',
      price: '320,000',
      pricePerToken: '128',
      tokens: 2500,
      availableTokens: 890,
      image: 'https://s3.amazonaws.com/ccg-corporate-production/news-images/ancients_200909a.jpg',
      description: 'Rare collection of authentic Roman coins from 100 AD',
      artist: 'Ancient Artifacts Ltd.'
    },
    {
      id: 3,
      name: 'Limited Edition Rolex Daytona',
      category: 'Collectables',
      price: '185,000',
      pricePerToken: '185',
      tokens: 1000,
      availableTokens: 450,
      image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Vintage 1967 Rolex Daytona in pristine condition',
      artist: 'Luxury Timepieces Co.'
    },
    {
      id: 4,
      name: 'Abstract Modern Sculpture',
      category: 'Fine Art',
      price: '420,000',
      pricePerToken: '210',
      tokens: 2000,
      availableTokens: 1100,
      image: 'https://images.pexels.com/photos/3004909/pexels-photo-3004909.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Contemporary bronze sculpture by renowned artist',
      artist: 'Marcus Wellington'
    },
    {
      id: 5,
      name: 'Vintage Ferrari 250 GTO',
      category: 'Collectables',
      price: '4,800,000',
      pricePerToken: '480',
      tokens: 10000,
      availableTokens: 3200,
      image: 'https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Rare 1962 Ferrari 250 GTO, one of 36 ever made',
      artist: 'Classic Motors Collection'
    },
    {
      id: 6,
      name: 'Renaissance Oil Painting',
      category: 'Fine Art',
      price: '1,200,000',
      pricePerToken: '240',
      tokens: 5000,
      availableTokens: 2800,
      image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Original oil painting from 16th century Italian master',
      artist: 'Heritage Art Gallery'
    }
  ];

  const filteredAssets = allAssets.filter(asset => {
    const matchesSearch = asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          asset.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || asset.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleBuyAsset = (asset) => {
    if (!walletAddress) {
      alert('Please connect your wallet first to buy tokens!');
      return;
    }
    setSelectedAsset(asset);
  };

  const handlePurchase = (tokenAmount) => {
    if (tokenAmount <= 0) {
      alert('Please enter a valid number of tokens');
      return;
    }
    if (tokenAmount > selectedAsset.availableTokens) {
      alert('Not enough tokens available');
      return;
    }
    const totalCost = (tokenAmount * parseFloat(selectedAsset.pricePerToken.replace(/,/g, ''))).toFixed(2);
    alert(`Purchase confirmed!\n${tokenAmount} tokens of "${selectedAsset.name}"\nTotal: $${totalCost} USD\n\nTransaction will be processed via MetaMask.`);
    setSelectedAsset(null);
  };

  return (
    <div className="assets-page">
      <div className="page-header">
        <h1>Browse All Assets</h1>
        <p>Discover and invest in tokenized high-value assets</p>
      </div>

      <div className="filters-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search assets by name or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="category-filters">
          <button
            className={selectedCategory === 'all' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setSelectedCategory('all')}
          >
            All Assets
          </button>
          <button
            className={selectedCategory === 'Fine Art' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setSelectedCategory('Fine Art')}
          >
            Fine Art
          </button>
          <button
            className={selectedCategory === 'Collectables' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setSelectedCategory('Collectables')}
          >
            Collectables
          </button>
        </div>
      </div>

      <div className="assets-container">
        <div className="results-count">
          {filteredAssets.length} asset{filteredAssets.length !== 1 ? 's' : ''} found
        </div>

        <div className="assets-grid">
          {filteredAssets.map(asset => (
            <div key={asset.id} className="asset-card">
              <img src={asset.image} alt={asset.name} className="asset-image" />
              <div className="asset-content">
                <span className="asset-category">{asset.category}</span>
                <h3 className="asset-title">{asset.name}</h3>
                <p className="asset-description">{asset.description}</p>
                <p className="asset-artist">By: {asset.artist}</p>

                <div className="asset-pricing">
                  <div className="price-info">
                    <span className="price-label">Total Value:</span>
                    <span className="price-value">${asset.price} USD</span>
                  </div>
                  <div className="price-info">
                    <span className="price-label">Price per Token:</span>
                    <span className="price-value">${asset.pricePerToken}</span>
                  </div>
                </div>

                <div className="token-info">
                  <div className="token-stat">
                    <span>Total Tokens:</span>
                    <strong>{asset.tokens}</strong>
                  </div>
                  <div className="token-stat">
                    <span>Available:</span>
                    <strong className="available">{asset.availableTokens}</strong>
                  </div>
                </div>

                <button
                  className="buy-button"
                  onClick={() => handleBuyAsset(asset)}
                >
                  Buy Tokens
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedAsset && (
        <div className="modal-overlay" onClick={() => setSelectedAsset(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedAsset(null)}>×</button>
            <h2>Purchase Tokens</h2>
            <h3>{selectedAsset.name}</h3>
            <p>Price per token: ${selectedAsset.pricePerToken} USD</p>
            <p>Available tokens: {selectedAsset.availableTokens}</p>
            <input
              type="number"
              placeholder="Number of tokens"
              className="token-input"
              id="tokenAmount"
              min="1"
              max={selectedAsset.availableTokens}
            />
            <button
              className="confirm-button"
              onClick={() => {
                const amount = parseInt(document.getElementById('tokenAmount').value);
                handlePurchase(amount);
              }}
            >
              Confirm Purchase
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Assets;
