import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Assets from './components/Assets';
import RealEstate from './components/RealEstate';
import Portfolio from './components/Portfolio';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        });
        setWalletAddress(accounts[0]);
        alert('Wallet connected successfully!');
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
        alert('Failed to connect wallet. Please make sure MetaMask is installed.');
      }
    } else {
      alert('MetaMask is not installed. Please install MetaMask browser extension.');
    }
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'assets':
        return <Assets walletAddress={walletAddress} />;
      case 'realestate':
        return <RealEstate walletAddress={walletAddress} />;
      case 'portfolio':
        return <Portfolio walletAddress={walletAddress} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      <Header
        setCurrentPage={setCurrentPage}
        connectWallet={connectWallet}
        walletAddress={walletAddress}
      />
      {renderPage()}
    </div>
  );
}

export default App;
