const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    comment:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    id: 2,
    name: "Alex K.",
    comment:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    id: 3,
    name: "James L.",
    comment:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
]

const Testimonials = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-[7%] py-12 md:py-16 overflow-hidden">
      
      <div className="flex items-center justify-between mb-8 md:mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black">
          Our Happy Customers
        </h2>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors text-lg"
          >
            ←
          </button>
          <button
            type="button"
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors text-lg"
          >
            →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {reviews.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-[20px] p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              {/* Stars */}
              <div className="text-yellow-400 text-base mb-3">★★★★★</div>

              <div className="flex items-center gap-1 font-bold text-base text-black mb-2">
                <span>{item.name}</span>
                <span className="bg-green-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                  ✓
                </span>
              </div>

              
              <p className="text-gray-600 text-sm leading-relaxed">
                "{item.comment}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials