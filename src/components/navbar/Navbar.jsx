import Popup from './Popup'
import logo from "../../assets/images/icons/SHOP.CO.svg"
import cart from "../../assets/images/icons/cart-icon.svg"
import profile from "../../assets/images/icons/user-icon.svg"

const Navbar = () => {
  return (
    <>
      <Popup />

      <nav className="h-[94px] border-b border-gray-200 flex items-center px-6 lg:px-[7%] gap-8">

        {/* LOGO */}
        <div className="shrink-0">
          <img
            src={logo}
            alt="SHOP.CO"
            className="w-[170px]"
          />
        </div>


        {/* NAV LINKS */}
        <div className="hidden lg:block shrink-0">
          <ul className="flex items-center gap-7 text-[15px] text-black">

            <li className="flex items-center gap-1 cursor-pointer">
              Shop
              <span className="text-sm">⌄</span>
            </li>

            <li className="cursor-pointer">
              On Sale
            </li>

            <li className="cursor-pointer">
              New Arrivals
            </li>

            <li className="cursor-pointer">
              Brands
            </li>

          </ul>
        </div>


        {/* SEARCH */}
        <div className="flex-1">
          <div className="relative">

            {/* Search icon */}
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl">
              ⌕
            </span>

            <input
              type="search"
              placeholder="Search for products..."
              className="
                w-full
                h-[48px]
                rounded-full
                bg-[#f2f2f2]
                pl-12
                pr-5
                outline-none
                text-sm
                placeholder:text-gray-500
              "
            />

          </div>
        </div>


        {/* ICONS */}
        <div className="flex items-center gap-5 shrink-0">

          <img
            src={cart}
            alt="cart"
            className="w-6 h-6 cursor-pointer"
          />

          <img
            src={profile}
            alt="profile"
            className="w-6 h-6 cursor-pointer"
          />

        </div>

      </nav>
    </>
  )
}

export default Navbar