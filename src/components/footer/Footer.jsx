import twitter from "../../assets/images/icons/facebook.svg"
import facebook from "../../assets/images/icons/facebook.svg"
import instagram from "../../assets/images/icons/instagram.svg"
import github from "../../assets/images/icons/github.svg"
import visa from "../../assets/images/icons/visa.svg"
import mastercard from "../../assets/images/icons/mastercard.svg"
import paypal from "../../assets/images/icons/paypal.svg"
import applepay from "../../assets/images/icons/applepay.svg"
import gpay from "../../assets/images/icons/googlepay.svg"

const Footer = () => {
  return (
    <footer className="relative mt-32 bg-[#f0f0f0]">
      
      <div className="px-4 sm:px-6 lg:px-[7%] -translate-y-1/2">
        <div className="bg-black text-white rounded-[20px] px-6 sm:px-12 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight md:max-w-[500px]">
            Stay upto date about our latest offers
          </h2>

          <div className="w-full md:w-auto flex flex-col gap-3 max-w-sm">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                ✉
              </span>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full h-11 bg-white text-black pl-11 pr-4 rounded-full text-sm outline-none placeholder:text-gray-400"
              />
            </div>
            <button
              type="button"
              className="w-full h-11 bg-white text-black font-semibold rounded-full text-sm hover:bg-gray-200 transition-colors"
            >
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER CONTENT */}
      <div className="px-4 sm:px-6 lg:px-[7%] pb-10 -mt-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-10 border-b border-gray-300">

          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <h3 className="text-2xl font-black tracking-tight text-black">
              SHOP.CO
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <img
                src={twitter}
                className="w-8 h-8 rounded-full border border-gray-300 bg-white flex items-center justify-center text-xs cursor-pointer hover:bg-black hover:text-white transition-colors"
              />
              <img className="w-8 h-8 rounded-full border  border-gray-300 bg-white flex items-center justify-center text-xs cursor-pointer hover:bg-black hover:text-white transition-colors"
                src={facebook}
              />
              <img className="w-8 h-8 rounded-full border border-gray-300 bg-white flex items-center justify-center text-xs cursor-pointer hover:bg-black hover:text-white transition-colors"
                src={instagram}
              />
              <img className="w-8 h-8 rounded-full border border-gray-300 bg-white flex items-center justify-center text-xs cursor-pointer hover:bg-black hover:text-white transition-colors"
                src={github}
              />
            </div>
          </div>


          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-xs sm:text-sm uppercase tracking-wider text-black">
              Company
            </h4>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-gray-500">
              <li className="cursor-pointer hover:text-black">About</li>
              <li className="cursor-pointer hover:text-black">Features</li>
              <li className="cursor-pointer hover:text-black">Works</li>
              <li className="cursor-pointer hover:text-black">Career</li>
            </ul>
          </div>

          
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-xs sm:text-sm uppercase tracking-wider text-black">
              Help
            </h4>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-gray-500">
              <li className="cursor-pointer hover:text-black">Customer Support</li>
              <li className="cursor-pointer hover:text-black">Delivery Details</li>
              <li className="cursor-pointer hover:text-black">Terms & Conditions</li>
              <li className="cursor-pointer hover:text-black">Privacy Policy</li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-xs sm:text-sm uppercase tracking-wider text-black">
              FAQ
            </h4>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-gray-500">
              <li className="cursor-pointer hover:text-black">Account</li>
              <li className="cursor-pointer hover:text-black">Manage Deliveries</li>
              <li className="cursor-pointer hover:text-black">Orders</li>
              <li className="cursor-pointer hover:text-black">Payments</li>
            </ul>
          </div>

          
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-xs sm:text-sm uppercase tracking-wider text-black">
              Resources
            </h4>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-gray-500">
              <li className="cursor-pointer hover:text-black">Free eBooks</li>
              <li className="cursor-pointer hover:text-black">Development Tutorial</li>
              <li className="cursor-pointer hover:text-black">How to - Blog</li>
              <li className="cursor-pointer hover:text-black">Youtube Playlist</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col lg:flex-row lg:justify-between items-center justify-center gap-4 text-xs text-gray-500">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="flex items-center gap-2">
            <img src={visa} className="font-bold"/>
            <img src={mastercard} className="font-bold"/>
            <img src={paypal} className="font-bold"/>
            <img src={applepay} className="font-bold"/>
            <img src={gpay} className="font-bold"/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer