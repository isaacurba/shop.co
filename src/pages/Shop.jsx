import { useGetAllProductsQuery } from "../api/api"
import Navbar from "../components/navbar/Navbar"

const Shop = () => {
  const { data: products, error, isLoading } = useGetAllProductsQuery()

    const productList = Array.isArray(products)
    ? products
    : Array.isArray(products?.products)
    ? products.products
    : [];

  return (
    <>
      <Navbar />
      <div className="px-4 sm:px-6 lg:px-[7%] py-10">
        <h1 className="text-3xl font-bold mb-8">All Products</h1>

        {isLoading && <p>Loading...</p>}
        {error && <p className="text-red-500">Failed to load products.</p>}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {productList.map((item) => (
          <div key={item.id} className="flex flex-col cursor-pointer group">
            
            <div className="bg-[#f0eeed] rounded-[20px] aspect-square flex items-center justify-center p-6 overflow-hidden">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="mt-3 flex flex-col gap-1">
              <h3 className="font-bold text-sm sm:text-base text-black truncate">
                {item.title}
              </h3>

              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <span className="text-yellow-400">★★★★☆</span>
                <span className="text-black font-medium">
                  {item.rating?.rate ?? 4.5}/<span className="text-gray-400">5</span>
                </span>
              </div>

              <div className="flex items-center gap-2 mt-0.5">
                <span className="font-bold text-lg sm:text-xl text-black">
                  ${Math.round(item.price)}
                </span>
              </div>

            </div>
          </div>
        ))}
        </div>
      </div>
    </>
  )
}

export default Shop