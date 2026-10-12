import { Link } from "react-router";
import casual from "../../assets/images/bgImg/e1b774aba32d9a769caba77c08e107a9198dcd6d.png";
import formal from "../../assets/images/bgImg/e46ed6ac8bdbe2c750dcc6e834bf1d98a4a73b29.png"
import gym from "../../assets/images/bgImg/fce658e0c17a220fe8bfb1126626f3ab58a761ec.png"

const DressStyle = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-[7%] py-10 md:py-16">
      
      <div className="bg-[#f0f0f0] rounded-[30px] md:rounded-[40px] px-6 sm:px-12 md:px-16 py-10 md:py-16">
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center uppercase tracking-tight mb-8 md:mb-14">
          Browse by Dress Style
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          
          <Link
            to="/product?category=casual"
            className="md:col-span-1 relative bg-white rounded-[20px] h-[190px] md:h-[260px] overflow-hidden group cursor-pointer"
          >
            <span className="absolute top-4 left-6 md:top-6 md:left-8 text-xl md:text-2xl font-bold text-black z-10">
              Casual
            </span>
            <img
              src={casual}
              alt="Casual"
              className="absolute right-0 top-0 h-full w-[65%] object-cover object-left group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          <Link
            to="/product?category=formal"
            className="md:col-span-2 relative bg-white rounded-[20px] h-[190px] md:h-[260px] overflow-hidden group cursor-pointer"
          >
            <span className="absolute top-4 left-6 md:top-6 md:left-8 text-xl md:text-2xl font-bold text-black z-10">
              Formal
            </span>
            <img
              src={formal}
              alt="Formal"
              className="absolute right-0 top-0 h-full w-[65%] object-cover object-left group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          <Link
            to="/product?category=party"
            className="md:col-span-2 relative bg-white rounded-[20px] h-[190px] md:h-[260px] overflow-hidden group cursor-pointer"
          >
            <span className="absolute top-4 left-6 md:top-6 md:left-8 text-xl md:text-2xl font-bold text-black z-10">
              Party
            </span>
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80"
              alt="Party"
              className="absolute right-0 top-0 h-full w-[65%] object-cover object-left group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          <Link
            to="/product?category=gym"
            className="md:col-span-1 relative bg-white rounded-[20px] h-[190px] md:h-[260px] overflow-hidden group cursor-pointer"
          >
            <span className="absolute top-4 left-6 md:top-6 md:left-8 text-xl md:text-2xl font-bold text-black z-10">
              Gym
            </span>
            <img
              src={gym}
              alt="Gym"
              className="absolute right-0 top-0 h-full w-[65%] object-cover object-left group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

        </div>
      </div>
    </section>
  )
}

export default DressStyle