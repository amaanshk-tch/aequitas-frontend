import React, { useState } from 'react';
import './RealEstate.css';

function RealEstate({ walletAddress }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedProperty, setSelectedProperty] = useState(null);

  const properties = [
    {
      id: 1,
      name: 'Luxury Penthouse Manhattan',
      location: 'New York',
      address: '432 Park Avenue, Manhattan, NY 10022',
      price: '2,500,000',
      pricePerToken: '250',
      tokens: 10000,
      availableTokens: 4500,
      image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800',
      bedrooms: 4,
      bathrooms: 3,
      area: '3200 sq ft',
      yearBuilt: 2020,
      rentalYield: '4.2%',
      description: 'Stunning penthouse with panoramic city views'
    },
    {
      id: 2,
      name: 'Beachfront Villa Miami',
      location: 'Miami',
      address: '1500 Ocean Drive, Miami Beach, FL 33139',
      price: '3,800,000',
      pricePerToken: '380',
      tokens: 10000,
      availableTokens: 6200,
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      bedrooms: 5,
      bathrooms: 4,
      area: '4500 sq ft',
      yearBuilt: 2019,
      rentalYield: '5.1%',
      description: 'Exclusive beachfront property with private pool'
    },
    {
      id: 3,
      name: 'Modern Loft San Francisco',
      location: 'San Francisco',
      address: '88 Folsom Street, San Francisco, CA 94105',
      price: '1,850,000',
      pricePerToken: '185',
      tokens: 10000,
      availableTokens: 3800,
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      bedrooms: 3,
      bathrooms: 2,
      area: '2400 sq ft',
      yearBuilt: 2021,
      rentalYield: '3.8%',
      description: 'Contemporary loft in the heart of SOMA district'
    },
    {
      id: 4,
      name: 'Downtown Condo Chicago',
      location: 'Chicago',
      address: '340 E Randolph Street, Chicago, IL 60601',
      price: '1,200,000',
      pricePerToken: '120',
      tokens: 10000,
      availableTokens: 5500,
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
      bedrooms: 2,
      bathrooms: 2,
      area: '1800 sq ft',
      yearBuilt: 2018,
      rentalYield: '4.5%',
      description: 'Premium condo with Lake Michigan views'
    },
    {
      id: 5,
      name: 'Hollywood Hills Estate',
      location: 'Los Angeles',
      address: '2000 Sunset Plaza Drive, Los Angeles, CA 90069',
      price: '5,200,000',
      pricePerToken: '520',
      tokens: 10000,
      availableTokens: 7100,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      bedrooms: 6,
      bathrooms: 5,
      area: '6000 sq ft',
      yearBuilt: 2022,
      rentalYield: '3.5%',
      description: 'Luxurious estate with infinity pool and city views'
    },
    {
      id: 6,
      name: 'Waterfront Apartment Seattle',
      location: 'Seattle',
      address: '1521 2nd Avenue, Seattle, WA 98101',
      price: '1,450,000',
      pricePerToken: '145',
      tokens: 10000,
      availableTokens: 4200,
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      bedrooms: 3,
      bathrooms: 2,
      area: '2100 sq ft',
      yearBuilt: 2020,
      rentalYield: '4.0%',
      description: 'Modern apartment overlooking Puget Sound'
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === 'all' || property.location === selectedLocation;
    return matchesSearch && matchesLocation;
  });

  const handleBuyProperty = (property) => {
    if (!walletAddress) {
      alert('Please connect your wallet first to buy tokens!');
      return;
    }
    setSelectedProperty(property);
  };

  const handlePurchase = (tokenAmount) => {
    if (tokenAmount <= 0) {
      alert('Please enter a valid number of tokens');
      return;
    }
    if (tokenAmount > selectedProperty.availableTokens) {
      alert('Not enough tokens available');
      return;
    }
    const totalCost = (tokenAmount * parseFloat(selectedProperty.pricePerToken.replace(/,/g, ''))).toFixed(2);
    alert(`Purchase confirmed!\n${tokenAmount} tokens of "${selectedProperty.name}"\nTotal: $${totalCost} USD\n\nTransaction will be processed via MetaMask.`);
    setSelectedProperty(null);
  };

  const uniqueLocations = [...new Set(properties.map(p => p.location))];

  return (
    <div className="realestate-page">
      <div className="page-header">
        <h1>Real Estate Investments</h1>
        <p>Own fractional shares of premium properties worldwide</p>
      </div>

      <div className="filters-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search properties by name or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="location-filters">
          <button
            className={selectedLocation === 'all' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setSelectedLocation('all')}
          >
            All Locations
          </button>
          {uniqueLocations.map(location => (
            <button
              key={location}
              className={selectedLocation === location ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setSelectedLocation(location)}
            >
              {location}
            </button>
          ))}
        </div>
      </div>

      <div className="properties-container">
        <div className="results-count">
          {filteredProperties.length} propert{filteredProperties.length !== 1 ? 'ies' : 'y'} found
        </div>

        <div className="properties-grid">
          {filteredProperties.map(property => (
            <div key={property.id} className="property-card">
              <img src={property.image} alt={property.name} className="property-image" />
              <div className="property-content">
                <div className="property-header">
                  <h3 className="property-name">{property.name}</h3>
                  <span className="property-location">{property.location}</span>
                </div>
                <p className="property-address">{property.address}</p>

                <div className="property-features">
                  <div className="feature">
                    <span className="feature-icon">🛏️</span>
                    <span>{property.bedrooms} Beds</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">🚿</span>
                    <span>{property.bathrooms} Baths</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">📏</span>
                    <span>{property.area}</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">📅</span>
                    <span>{property.yearBuilt}</span>
                  </div>
                </div>

                <p className="property-description">{property.description}</p>

                <div className="property-financials">
                  <div className="financial-item">
                    <span className="label">Total Value:</span>
                    <span className="value">${property.price}</span>
                  </div>
                  <div className="financial-item">
                    <span className="label">Price/Token:</span>
                    <span className="value">${property.pricePerToken}</span>
                  </div>
                  <div className="financial-item">
                    <span className="label">Rental Yield:</span>
                    <span className="value yield">{property.rentalYield}</span>
                  </div>
                </div>

                <div className="token-availability">
                  <span>Available: {property.availableTokens} / {property.tokens} tokens</span>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{width: `${(property.availableTokens / property.tokens) * 100}%`}}
                    ></div>
                  </div>
                </div>

                <button
                  className="buy-button"
                  onClick={() => handleBuyProperty(property)}
                >
                  Buy Tokens
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProperty && (
        <div className="modal-overlay" onClick={() => setSelectedProperty(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProperty(null)}>×</button>
            <h2>Purchase Property Tokens</h2>
            <h3>{selectedProperty.name}</h3>
            <p><strong>Location:</strong> {selectedProperty.location}</p>
            <p><strong>Price per token:</strong> ${selectedProperty.pricePerToken} USD</p>
            <p><strong>Available tokens:</strong> {selectedProperty.availableTokens}</p>
            <p><strong>Expected rental yield:</strong> {selectedProperty.rentalYield}</p>
            <input
              type="number"
              placeholder="Number of tokens"
              className="token-input"
              id="tokenAmount"
              min="1"
              max={selectedProperty.availableTokens}
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

export default RealEstate;
