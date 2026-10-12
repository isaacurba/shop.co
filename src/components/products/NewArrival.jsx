import { useGetAllProductsQuery } from "../../api/api";
import { Link } from "react-router"; // or "react-router-dom"

const NewArrivals = () => {
  const { data: products, error, isLoading } = useGetAllProductsQuery();

  if (isLoading) return <p className="text-center py-16 text-gray-500 font-medium">Loading products...</p>;
  if (error) return <p className="text-center py-16 text-red-500 font-medium">Error loading products.</p>;

  const productList = Array.isArray(products)
    ? products
    : Array.isArray(products?.products)
    ? products.products
    : [];

  return (
    <section className="px-4 sm:px-6 lg:px-[7%] py-12 md:py-16 border-b border-gray-200">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center uppercase tracking-tight mb-8 md:mb-12">
        New Arrivals
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {productList.slice(0, 4).map((item) => (
          <Link
            key={item.id}
            to={`/product/${item.id}`}
            className="flex flex-col cursor-pointer group"
          >
            <div className="bg-[#f0eeed] rounded-[20px] aspect-square flex items-center justify-center p-6 overflow-hidden">
              <img
                src={item.image || item.thumbnail}
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
                  {item.rating?.rate ?? item.rating ?? 4.5}/<span className="text-gray-400">5</span>
                </span>
              </div>

              <div className="flex items-center gap-2 mt-0.5">
                <span className="font-bold text-lg sm:text-xl text-black">
                  ${Math.round(item.price)}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link
          to="/product"
          className="w-full sm:w-auto text-center px-14 py-3 rounded-full border border-gray-200 hover:border-black hover:bg-black hover:text-white transition-colors duration-200 text-sm font-medium"
        >
          View All
        </Link>
      </div>
    </section>
  );
};

export default NewArrivals;