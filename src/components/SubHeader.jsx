import React, { useState } from 'react'
import Link from './Link'
import { Search, ChevronDown, ShoppingCart } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const SubHeader = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  return (
    <div className="border-b border-gray-200 bg-[#F9F9F9]">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-[80px] gap-6">
          <div className="p-4 ">
            <Link to="/">
              <img src="/images/logo_black_and_gold.png" alt="Sel alkel logo" className="w-20" />
            </Link>
          </div>
          {/* All Categories Button */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="h-[40px] rounded-[20px] px-6 bg-green-500 text-white font-medium flex items-center gap-2 hover:bg-[#009706] transition-colors"
            >
              <span>All Categories</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {isOpen && (
              <div className="absolute top-full left-0 w-[250px] bg-white shadow-lg rounded-b-lg z-50">
                {/* Add your categories dropdown content here */}
              </div>
            )}
          </div>

          {/* Search Bar */}
          <div className="flex-1">
            <div className="relative max-w-2xl">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products"
                className="w-full bg-white h-[35px] pl-12 pr-4 rounded-2xl w-[250px] border border-gray-200 focus:outline-none focus:border-[#00B207]"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex items-center gap-6">
            <Link
              to="/promotions"
              className="flex items-center gap-2 text-gray-600 hover:text-[#00B207] transition-colors"
            >
              <span className="text-md">Promotions</span>
            </Link>
            <Link
              to="/breakfast"
              className="flex items-center gap-2 text-gray-600 hover:text-[#00B207] transition-colors"
            >
              <span className="text-md">Ideas For Breakfast</span>
            </Link>
            <Link
              to="/weekly-discounts"
              className="flex items-center gap-2 text-gray-600 hover:text-[#00B207] transition-colors"
            >
              <span className="text-md">Weekly Discounts</span>
            </Link>
          </div>

          {/* Cart Icon */}
          <Link
            to="/cart"
            className="w-10 h-10 rounded-full bg-[#E6F5E7] flex items-center justify-center transition-colors"
          >
            <div className="relative cursor-pointer" onClick={() => navigate("/orders/new")}>
              <ShoppingCart size={18} className="text-green-500" />
              <span className="absolute -top-4 -right-4 w-5 h-5 bg-white text-green-500 text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SubHeader