# AEQUITAS - Asset Tokenization Platform

A Web3-based platform for tokenizing and trading high-value assets including real estate, fine art, and rare collectables.

## Project Overview

AEQUITAS is a blockchain-based application that allows users to buy and sell fractional ownership of high-value assets through tokenization. Built with React and designed to integrate with MetaMask wallet for Web3 functionality.

## Features

### 1. Wallet Connection
- Connect to MetaMask wallet using the button in the top-right corner
- View your connected wallet address
- Required for buying, selling, and viewing portfolio

### 2. Home Page
- Welcome section with platform overview
- Featured assets showcase
- Statistics about the platform
- Quick navigation to different sections

### 3. All Assets Page
- Browse all available tokenized assets
- Search functionality by name or category
- Filter by category (Fine Art, Collectables)
- View detailed asset information
- Buy tokens directly from listings

### 4. Real Estate Section
- Dedicated section for real estate properties
- Filter by location (New York, Miami, San Francisco, Chicago, Los Angeles, Seattle)
- View property details (bedrooms, bathrooms, square footage, year built)
- See rental yield percentages
- Purchase property tokens

### 5. Portfolio Page
- View all your owned assets (requires wallet connection)
- Track total investment and current value
- Monitor profit/loss for each asset
- See ownership percentages
- Sell tokens from your holdings

## Technology Stack

- **Frontend**: React (Create React App)
- **Styling**: CSS3
- **Web3**: MetaMask integration via window.ethereum
- **Images**: Pexels stock photos

## Project Structure

```
aequitas-frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.js          # Navigation header with wallet connection
│   │   ├── Header.css
│   │   ├── Home.js            # Home page component
│   │   ├── Home.css
│   │   ├── Assets.js          # All assets browsing page
│   │   ├── Assets.css
│   │   ├── RealEstate.js      # Real estate section
│   │   ├── RealEstate.css
│   │   ├── Portfolio.js       # User portfolio page
│   │   └── Portfolio.css
│   ├── App.js                 # Main app component with routing logic
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Key Concepts for Understanding

### 1. Component Architecture
- **App.js**: Main component that manages application state and page navigation
- **Header.js**: Navigation bar with wallet connection button
- **Home/Assets/RealEstate/Portfolio**: Individual page components

### 2. State Management
- Uses React useState hooks for managing:
  - Current page navigation
  - Wallet connection status
  - Search filters
  - Modal visibility
  - Selected assets

### 3. MetaMask Integration
- Uses `window.ethereum` to detect MetaMask
- Calls `eth_requestAccounts` method to connect wallet
- Stores wallet address in state

### 4. Buy/Sell Functionality
- Modal popups for token purchases
- Validation for token amounts
- Alert confirmations (simulated transactions)

## How to Run

1. Install dependencies:
```bash
cd aequitas-frontend
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open browser at `http://localhost:3000`

4. Install MetaMask browser extension if not already installed

## How It Works

### Navigation
- The app uses state-based routing (no React Router)
- Clicking navigation buttons changes the `currentPage` state
- App.js renders different components based on `currentPage` value

### Wallet Connection
1. User clicks "Connect Wallet" button
2. App checks if MetaMask is installed (`window.ethereum`)
3. Requests account access via MetaMask
4. Stores wallet address in state
5. Updates UI to show connected status

### Buying Tokens
1. User clicks "Buy Tokens" on any asset
2. App checks if wallet is connected
3. Modal opens with purchase form
4. User enters token amount
5. Validation checks available tokens
6. Simulated transaction confirmation

### Selling Tokens
1. User navigates to Portfolio (requires wallet connection)
2. Views owned assets
3. Clicks "Sell Tokens" button
4. Modal opens with sell form
5. User enters amount to sell
6. Validation checks owned tokens
7. Simulated sale confirmation

## Important Notes

- This is a **FRONT-END ONLY** implementation
- No actual blockchain transactions occur
- All data is hardcoded (no backend/database)
- MetaMask integration is for UI demonstration only
- Token purchases/sales are simulated with alerts

## Code Explanation for Teachers

### React Basics Used:
- **Components**: Reusable UI pieces (Header, Home, Assets, etc.)
- **Props**: Passing data between components (walletAddress, setCurrentPage)
- **State**: Managing dynamic data (useState hook)
- **Event Handlers**: onClick, onChange functions
- **Conditional Rendering**: Showing different content based on conditions

### CSS Features:
- **Grid Layout**: For responsive card layouts
- **Flexbox**: For component alignment
- **Gradients**: Modern visual effects
- **Transitions**: Smooth hover effects
- **Media Queries**: Responsive design for mobile

### Web3 Concepts:
- **MetaMask**: Browser wallet for Ethereum
- **window.ethereum**: JavaScript API provided by MetaMask
- **Wallet Address**: Unique identifier (0x...)
- **Tokens**: Digital shares of assets

## Future Enhancements (Not Implemented)

- Smart contract integration for real transactions
- Backend API for dynamic data
- User authentication system
- Real-time price updates
- Transaction history
- Multiple blockchain support

---

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

#### `npm run build`

Builds the app for production to the `build` folder.

#### `npm test`

Launches the test runner in the interactive watch mode.
