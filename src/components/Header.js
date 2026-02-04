import React from 'react';
import './Header.css';

function Header({ setCurrentPage, connectWallet, walletAddress }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" onClick={() => setCurrentPage('home')}>
          <h1>AEQUITAS</h1>
          <p className="tagline">Asset Tokenization Platform</p>
        </div>

        <nav className="nav-menu">
          <button className="nav-link" onClick={() => setCurrentPage('home')}>
            Home
          </button>
          <button className="nav-link" onClick={() => setCurrentPage('assets')}>
            All Assets
          </button>
          <button className="nav-link" onClick={() => setCurrentPage('realestate')}>
            Real Estate
          </button>
          <button className="nav-link" onClick={() => setCurrentPage('portfolio')}>
            My Portfolio
          </button>
        </nav>

        <div className="wallet-section">
          {walletAddress ? (
            <div className="wallet-connected">
              <span className="wallet-icon">🔗</span>
              <span className="wallet-address">
                {walletAddress.substring(0, 6)}...{walletAddress.substring(38)}
              </span>
            </div>
          ) : (
            <button className="connect-wallet-btn" onClick={connectWallet}>
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
