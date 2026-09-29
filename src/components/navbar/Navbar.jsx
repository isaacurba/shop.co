import Popup from './Popup'
import logo from "../../assets/images/icons/SHOP.CO.svg"
import cart from "../../assets/images/icons/cart-icon.svg"
import profile from "../../assets/images/icons/user-icon.svg"


const Navbar = () => {
  return (
    <>
      <Popup />

      <nav className='lg:flex border border-solid p-10'>

        <div className='flex'>
          <img src={logo} alt="logo" />
        </div>
    
        <div>
          <ul className='flex gap-5'>
            <li>Shops</li>
            <li>On sales</li>
            <li>New Arrival</li>
            <li>Brands</li>
          </ul>
        </div>
    
        <div className='w-full'>
          <input type="search" />
        </div>

        <div className='flex'> 
          <img src={cart} alt="cart" />
          <img src={profile} alt="profile" />

        </div>

      </nav>
        
        
    </>
  )
}

export default Navbar