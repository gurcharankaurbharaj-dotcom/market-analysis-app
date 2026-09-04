import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: 'Dashboard', href: '/#dashboard' },
    { label: 'Analysis', href: '/#analysis' },
    { label: 'Portfolio', href: '/#portfolio' },
    { label: 'Watchlist', href: '/#watchlist' },
    { label: 'News', href: '/#news' },
  ]

  return (
    <nav className="bg-dark border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="font-bold">📊</span>
            </div>
            <h1 className="text-xl font-bold">Market Analysis</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-blue-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 hover:bg-gray-700 rounded"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
