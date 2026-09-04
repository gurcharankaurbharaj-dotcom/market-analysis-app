import React, { useState, useEffect } from 'react'
import StockCard from './StockCard'
import TechnicalAnalysis from './TechnicalAnalysis'
import BuySellSignals from './BuySellSignals'
import Portfolio from './Portfolio'
import Watchlist from './Watchlist'
import NewsSection from './NewsSection'
import { TrendingUp, TrendingDown } from 'lucide-react'

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [stocks, setStocks] = useState([
    { symbol: 'NIFTY50', name: 'Nifty 50', price: 19250.50, change: 2.5, volume: '5.2M' },
    { symbol: 'BANKNIFTY', name: 'Bank Nifty', price: 47850.25, change: -1.2, volume: '3.8M' },
    { symbol: 'TCS', name: 'Tata Consultancy Services', price: 3850.40, change: 3.2, volume: '1.2M' },
    { symbol: 'INFY', name: 'Infosys Limited', price: 1520.30, change: 1.8, volume: '2.5M' },
  ])

  const tabs = [
    { id: 'overview', label: '📊 Overview' },
    { id: 'analysis', label: '📈 Technical Analysis' },
    { id: 'signals', label: '���� Buy/Sell Signals' },
    { id: 'portfolio', label: '💼 Portfolio' },
    { id: 'watchlist', label: '⭐ Watchlist' },
    { id: 'news', label: '📰 News' },
  ]

  return (
    <div className="min-h-screen bg-darker">
      {/* Header Stats */}
      <div className="bg-dark border-b border-gray-700 p-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Market Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="card">
              <p className="text-gray-400 text-sm">NIFTY 50</p>
              <p className="text-2xl font-bold mt-2">19,250.50</p>
              <p className="text-green-500 text-sm mt-1 flex items-center gap-1">
                <TrendingUp size={16} /> +2.5%
              </p>
            </div>
            <div className="card">
              <p className="text-gray-400 text-sm">BANK NIFTY</p>
              <p className="text-2xl font-bold mt-2">47,850.25</p>
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <TrendingDown size={16} /> -1.2%
              </p>
            </div>
            <div className="card">
              <p className="text-gray-400 text-sm">Market Cap</p>
              <p className="text-2xl font-bold mt-2">₹320.5T</p>
              <p className="text-green-500 text-sm mt-1">+5.2% YTD</p>
            </div>
            <div className="card">
              <p className="text-gray-400 text-sm">Volatility Index</p>
              <p className="text-2xl font-bold mt-2">18.45</p>
              <p className="text-yellow-500 text-sm mt-1">Moderate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-4 px-6 py-4 border-b border-gray-700 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap pb-2 font-semibold transition-colors ${
                activeTab === tab.id
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">Top Stocks</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stocks.map((stock) => (
                  <StockCard key={stock.symbol} stock={stock} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'analysis' && <TechnicalAnalysis />}
          {activeTab === 'signals' && <BuySellSignals />}
          {activeTab === 'portfolio' && <Portfolio />}
          {activeTab === 'watchlist' && <Watchlist />}
          {activeTab === 'news' && <NewsSection />}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
