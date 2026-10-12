import Popup from './Popup'
import logo from "../../assets/images/icons/SHOP.CO.svg"
import cart from "../../assets/images/icons/cart-icon.svg"
import profile from "../../assets/images/icons/user-icon.svg"
import { Link } from "react-router"

const Navbar = () => {
  return (
    <>
      <Popup />

      <nav className="h-16 md:h-20 border-b border-gray-200 flex items-center justify-between px-4 md:px-8 gap-4">

        <div className="shrink-0">
          <Link to="/">
              <img
              src={logo}
              alt="SHOP.CO"
              className="w-28 sm:w-36 md:w-40"
            />
          </Link>
        </div>

        <ul className="hidden md:flex items-center gap-6 text-sm text-black">
          <li className="cursor-pointer">Shop ⌄</li>
          <li className="cursor-pointer">On Sale</li>
          <li className="cursor-pointer">New Arrivals</li>
          <li className="cursor-pointer">Brands</li>
        </ul>

        <div className="hidden sm:block flex-1 max-w-md">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              ⌕
            </span>
            <input
              type="search"
              placeholder="Search products..."
              className="w-full h-10 rounded-full bg-gray-100 pl-9 pr-4 text-sm outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <span className="sm:hidden text-lg cursor-pointer">⌕</span>

          <img
            src={cart}
            alt="cart"
            className="w-5 h-5 cursor-pointer"
          />
          
          <img
            src={profile}
            alt="profile"
            className="w-5 h-5 cursor-pointer"
          />
        </div>

      </nav>
    </>
  )
}

export default Navbar