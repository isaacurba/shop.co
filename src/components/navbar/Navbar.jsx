import { useState } from 'react'
import Popup from './Popup'
import logo from "../../assets/images/icons/SHOP.CO.svg"
import cart from "../../assets/images/icons/cart-icon.svg"
import profile from "../../assets/images/icons/user-icon.svg"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpenMobile, setIsSearchOpenMobile] = useState(false)

  return (
    <>
      <Popup />

      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <nav className="h-16 md:h-[94px] flex items-center justify-between px-4 sm:px-6 lg:px-[7%] gap-4 md:gap-8">

          {/* LEFT: HAMBURGER (Mobile only) & LOGO */}
          <div className="flex items-center gap-3 md:gap-4 shrink-0">
            {/* Hamburger Button */}
            <button
              type="button"
              aria-label="Toggle Menu"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="lg:hidden p-1 text-gray-700 hover:text-black focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Logo */}
            <a href="/">
              <img
                src={logo}
                alt="SHOP.CO"
                className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[170px] h-auto object-contain"
              />
            </a>
          </div>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden lg:block shrink-0">
            <ul className="flex items-center gap-6 xl:gap-8 text-[15px] font-medium text-black">
              <li className="flex items-center gap-1 cursor-pointer hover:text-gray-600 transition-colors">
                Shop
                <span className="text-xs">⌄</span>
              </li>
              <li className="cursor-pointer hover:text-gray-600 transition-colors">
                On Sale
              </li>
              <li className="cursor-pointer hover:text-gray-600 transition-colors">
                New Arrivals
              </li>
              <li className="cursor-pointer hover:text-gray-600 transition-colors">
                Brands
              </li>
            </ul>
          </div>

          {/* DESKTOP SEARCH BAR */}
          <div className="hidden md:flex flex-1 max-w-[600px]">
            <div className="relative w-full">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg pointer-events-none">
                ⌕
              </span>
              <input
                type="search"
                placeholder="Search for products..."
                className="
                  w-full
                  h-[44px] lg:h-[48px]
                  rounded-full
                  bg-[#f2f2f2]
                  pl-11
                  pr-5
                  outline-none
                  text-sm
                  placeholder:text-gray-500
                  focus:ring-2 focus:ring-black/10
                "
              />
            </div>
          </div>

          {/* RIGHT: ICONS */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Mobile Search Toggle Icon */}
            <button
              type="button"
              aria-label="Open Search"
              onClick={() => setIsSearchOpenMobile((prev) => !prev)}
              className="md:hidden text-2xl leading-none text-black p-1 hover:opacity-75 focus:outline-none"
            >
              ⌕
            </button>

            <button type="button" aria-label="Shopping Cart" className="p-1 hover:opacity-75 transition-opacity">
              <img
                src={cart}
                alt="cart"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </button>

            <button type="button" aria-label="Account Profile" className="p-1 hover:opacity-75 transition-opacity">
              <img
                src={profile}
                alt="profile"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </button>
          </div>

        </nav>

        {/* MOBILE SEARCH BAR (Slides down when toggled) */}
        {isSearchOpenMobile && (
          <div className="md:hidden px-4 pb-3">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg pointer-events-none">
                ⌕
              </span>
              <input
                type="search"
                autoFocus
                placeholder="Search for products..."
                className="
                  w-full
                  h-[42px]
                  rounded-full
                  bg-[#f2f2f2]
                  pl-11
                  pr-4
                  outline-none
                  text-sm
                  placeholder:text-gray-500
                "
              />
            </div>
          </div>
        )}

        {/* MOBILE MENU DROPDOWN */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-5 shadow-lg">
            <ul className="flex flex-col gap-4 text-base font-medium text-black">
              <li className="flex items-center justify-between cursor-pointer py-1 border-b border-gray-100">
                <span>Shop</span>
                <span>⌄</span>
              </li>
              <li className="cursor-pointer py-1 border-b border-gray-100">
                On Sale
              </li>
              <li className="cursor-pointer py-1 border-b border-gray-100">
                New Arrivals
              </li>
              <li className="cursor-pointer py-1">
                Brands
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  )
}

export default Navbar