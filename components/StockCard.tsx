import React from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface Stock {
  symbol: string
  name: string
  price: number
  change: number
  volume: string
}

interface Props {
  stock: Stock
}

const StockCard: React.FC<Props> = ({ stock }) => {
  const isPositive = stock.change >= 0

  return (
    <div className="card hover:border-blue-500 transition-all cursor-pointer">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-gray-400 text-sm">{stock.symbol}</p>
          <p className="text-lg font-semibold mt-1">{stock.name}</p>
        </div>
        {isPositive ? (
          <TrendingUp className="text-green-500" size={20} />
        ) : (
          <TrendingDown className="text-red-500" size={20} />
        )}
      </div>

      <p className="text-2xl font-bold mb-2">₹{stock.price.toFixed(2)}</p>

      <div className="flex justify-between items-center">
        <p className={`text-sm font-semibold ${
          isPositive ? 'text-green-500' : 'text-red-500'
        }`}>
          {isPositive ? '+' : ''}{stock.change}%
        </p>
        <p className="text-gray-400 text-sm">Vol: {stock.volume}</p>
      </div>
    </div>
  )
}

export default StockCard
