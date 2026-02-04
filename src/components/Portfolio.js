import React, { useState } from 'react';
import './Portfolio.css';

function Portfolio({ walletAddress }) {
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [sellModalOpen, setSellModalOpen] = useState(false);

  const portfolioAssets = walletAddress ? [
    {
      id: 1,
      name: 'Luxury Penthouse Manhattan',
      type: 'Real Estate',
      image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800',
      tokensOwned: 150,
      totalTokens: 10000,
      investmentValue: '37,500',
      currentValue: '39,200',
      profitLoss: '+4.5%',
      pricePerToken: '250',
      purchaseDate: '2024-08-15'
    },
    {
      id: 2,
      name: 'Ancient Roman Coin Collection',
      type: 'Collectables',
      image: 'https://images.pexels.com/photos/128408/pexels-photo-128408.jpeg?auto=compress&cs=tinysrgb&w=800',
      tokensOwned: 50,
      totalTokens: 2500,
      investmentValue: '6,400',
      currentValue: '6,800',
      profitLoss: '+6.3%',
      pricePerToken: '128',
      purchaseDate: '2024-09-01'
    },
    {
      id: 3,
      name: 'Renaissance Oil Painting',
      type: 'Fine Art',
      image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=800',
      tokensOwned: 75,
      totalTokens: 5000,
      investmentValue: '18,000',
      currentValue: '17,100',
      profitLoss: '-5.0%',
      pricePerToken: '240',
      purchaseDate: '2024-07-20'
    },
    {
      id: 4,
      name: 'Beachfront Villa Miami',
      type: 'Real Estate',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      tokensOwned: 200,
      totalTokens: 10000,
      investmentValue: '76,000',
      currentValue: '81,500',
      profitLoss: '+7.2%',
      pricePerToken: '380',
      purchaseDate: '2024-06-10'
    }
  ] : [];

  const calculateTotals = () => {
    if (portfolioAssets.length === 0) {
      return { totalInvestment: 0, currentValue: 0, totalProfit: 0 };
    }

    const totalInvestment = portfolioAssets.reduce((sum, asset) =>
      sum + parseFloat(asset.investmentValue.replace(/,/g, '')), 0
    );
    const currentValue = portfolioAssets.reduce((sum, asset) =>
      sum + parseFloat(asset.currentValue.replace(/,/g, '')), 0
    );
    const totalProfit = currentValue - totalInvestment;

    return { totalInvestment, currentValue, totalProfit };
  };

  const handleSellAsset = (asset) => {
    setSelectedAsset(asset);
    setSellModalOpen(true);
  };

  const handleSell = (tokenAmount) => {
    if (tokenAmount <= 0) {
      alert('Please enter a valid number of tokens');
      return;
    }
    if (tokenAmount > selectedAsset.tokensOwned) {
      alert('You cannot sell more tokens than you own');
      return;
    }
    const totalValue = (tokenAmount * parseFloat(selectedAsset.pricePerToken.replace(/,/g, ''))).toFixed(2);
    alert(`Sale confirmed!\n${tokenAmount} tokens of "${selectedAsset.name}"\nTotal: $${totalValue} USD\n\nTransaction will be processed via MetaMask.`);
    setSellModalOpen(false);
    setSelectedAsset(null);
  };

  const { totalInvestment, currentValue, totalProfit } = calculateTotals();
  const profitPercentage = totalInvestment > 0 ? ((totalProfit / totalInvestment) * 100).toFixed(2) : 0;

  if (!walletAddress) {
    return (
      <div className="portfolio-page">
        <div className="empty-state">
          <div className="empty-icon">🔒</div>
          <h2>Connect Your Wallet</h2>
          <p>Please connect your MetaMask wallet to view your portfolio</p>
        </div>
      </div>
    );
  }

  if (portfolioAssets.length === 0) {
    return (
      <div className="portfolio-page">
        <div className="empty-state">
          <div className="empty-icon">📊</div>
          <h2>Your Portfolio is Empty</h2>
          <p>Start investing in tokenized assets to build your portfolio</p>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio-page">
      <div className="page-header">
        <h1>My Portfolio</h1>
        <p>Track and manage your tokenized asset investments</p>
      </div>

      <div className="portfolio-summary">
        <div className="summary-card">
          <h3>Total Investment</h3>
          <p className="summary-value">${totalInvestment.toLocaleString()} USD</p>
        </div>
        <div className="summary-card">
          <h3>Current Value</h3>
          <p className="summary-value">${currentValue.toLocaleString()} USD</p>
        </div>
        <div className="summary-card">
          <h3>Total Profit/Loss</h3>
          <p className={`summary-value ${totalProfit >= 0 ? 'profit' : 'loss'}`}>
            {totalProfit >= 0 ? '+' : ''}{totalProfit.toLocaleString()} USD
            <span className="percentage">({profitPercentage >= 0 ? '+' : ''}{profitPercentage}%)</span>
          </p>
        </div>
        <div className="summary-card">
          <h3>Total Assets</h3>
          <p className="summary-value">{portfolioAssets.length}</p>
        </div>
      </div>

      <div className="portfolio-assets">
        <h2>Your Assets</h2>
        <div className="assets-list">
          {portfolioAssets.map(asset => (
            <div key={asset.id} className="portfolio-asset-card">
              <img src={asset.image} alt={asset.name} className="asset-image" />
              <div className="asset-details">
                <div className="asset-header">
                  <div>
                    <h3>{asset.name}</h3>
                    <span className="asset-type">{asset.type}</span>
                  </div>
                </div>

                <div className="asset-stats">
                  <div className="stat-row">
                    <span className="stat-label">Tokens Owned:</span>
                    <span className="stat-value">{asset.tokensOwned} / {asset.totalTokens}</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-label">Ownership:</span>
                    <span className="stat-value">{((asset.tokensOwned / asset.totalTokens) * 100).toFixed(2)}%</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-label">Initial Investment:</span>
                    <span className="stat-value">${asset.investmentValue} USD</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-label">Current Value:</span>
                    <span className="stat-value">${asset.currentValue} USD</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-label">Profit/Loss:</span>
                    <span className={`stat-value ${asset.profitLoss.startsWith('+') ? 'profit' : 'loss'}`}>
                      {asset.profitLoss}
                    </span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-label">Purchase Date:</span>
                    <span className="stat-value">{asset.purchaseDate}</span>
                  </div>
                </div>

                <button
                  className="sell-button"
                  onClick={() => handleSellAsset(asset)}
                >
                  Sell Tokens
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {sellModalOpen && selectedAsset && (
        <div className="modal-overlay" onClick={() => { setSellModalOpen(false); setSelectedAsset(null); }}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => { setSellModalOpen(false); setSelectedAsset(null); }}>×</button>
            <h2>Sell Tokens</h2>
            <h3>{selectedAsset.name}</h3>
            <p><strong>Tokens Owned:</strong> {selectedAsset.tokensOwned}</p>
            <p><strong>Current Price per Token:</strong> ${selectedAsset.pricePerToken} USD</p>
            <input
              type="number"
              placeholder="Number of tokens to sell"
              className="token-input"
              id="sellTokenAmount"
              min="1"
              max={selectedAsset.tokensOwned}
            />
            <button
              className="confirm-button"
              onClick={() => {
                const amount = parseInt(document.getElementById('sellTokenAmount').value);
                handleSell(amount);
              }}
            >
              Confirm Sale
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
