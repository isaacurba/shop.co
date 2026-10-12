import { useState } from "react";
import { useParams } from "react-router";
import { useGetProductQuery } from "../api/api"; 
import Navbar from "../components/navbar/Navbar";
import Testimonials from "../components/testimonials/Testimonials";
import Footer from "../components/footer/Footer";


const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, isLoading, error } = useGetProductQuery(id);

  const [selectedColor, setSelectedColor] = useState("#4f4631");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);

  if (isLoading) {
    return <p className="text-center py-20 text-gray-500 font-medium">Loading product details...</p>;
  }

  if (error || !product) {
    return <p className="text-center py-20 text-red-500 font-medium">Product not found.</p>;
  }


  const originalPrice = product.discountPercentage
    ? (product.price / (1 - product.discountPercentage / 100)).toFixed(2)
    : null;

  const colors = ["#4f4631", "#314f4a", "#31344f"];
  const sizes = ["Small", "Medium", "Large", "X-Large"];

  return (
    <>    
    <Navbar/>
    <section className="px-4 sm:px-6 lg:px-[7%] py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
        
        <div className="bg-[#f0eeed] rounded-[24px] aspect-square flex items-center justify-center p-8 overflow-hidden">
          <img
            src={product.images?.[0] || product.thumbnail}
            alt={product.title}
            className="w-full h-full object-contain mix-blend-multiply"
          />
        </div>


        <div className="flex flex-col">

          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
            {product.title}
          </h1>

          <div className="flex items-center gap-2 mt-3 text-sm">
            <span className="text-yellow-400 text-base">★★★★☆</span>
            <span className="text-black font-medium">
              {product.rating}/<span className="text-gray-400">5</span>
            </span>
          </div>

          <div className="flex items-center gap-3 mt-3">
            <span className="text-2xl sm:text-3xl font-bold text-black">
              ${product.price}
            </span>
            {originalPrice && (
              <span className="text-2xl sm:text-3xl font-bold text-gray-400 line-through">
                ${originalPrice}
              </span>
            )}
            {product.discountPercentage && (
              <span className="bg-red-100 text-red-500 font-medium text-xs sm:text-sm px-3 py-1 rounded-full">
                -{Math.round(product.discountPercentage)}%
              </span>
            )}
          </div>

          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mt-3 pb-5 border-b border-gray-200">
            {product.description}
          </p>

          <div className="py-4 border-b border-gray-200">
            <p className="text-xs sm:text-sm text-gray-500 mb-3">Select Colors</p>
            <div className="flex items-center gap-3">
              {colors.map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  style={{ backgroundColor: color }}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs transition-transform active:scale-95"
                >
                  {selectedColor === color && "✓"}
                </button>
              ))}
            </div>
          </div>

          <div className="py-4 border-b border-gray-200">
            <p className="text-xs sm:text-sm text-gray-500 mb-3">Choose Size</p>
            <div className="flex flex-wrap gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-[#f0f0f0] text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center justify-between bg-[#f0f0f0] rounded-full px-5 py-3 w-32 shrink-0">
              <button
                type="button"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="text-lg font-bold text-black select-none"
              >
                −
              </button>
              <span className="font-semibold text-sm">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((prev) => prev + 1)}
                className="text-lg font-bold text-black select-none"
              >
                +
              </button>
            </div>

            <button
              type="button"
              className="flex-1 bg-black text-white py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Add to Cart
            </button>
          </div>

        </div>

      </div>
    </section>
    <Testimonials />
    <Footer />
    </>
  );
};

export default ProductDetail;