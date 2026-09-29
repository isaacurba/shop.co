import Sparkle from "./Sparkle"
import heroImage from "../../assets/images/bgImg/b26fea69ccfd8aa5825862cdb9604a4fb4930464.jpg" 

// Data lives outside the JSX so it is easy to change later (or fetch from an API)
const stats = [
  { value: "200+", label: "International Brands" },
  { value: "2,000+", label: "High-Quality Products" },
  { value: "30,000+", label: "Happy Customers" },
]

const Hero = () => {
  return (
    <section className="bg-[#F2F0F1]">
      <div className="mx-auto grid max-w-7xl items-end gap-10 px-4 pt-10 md:px-8 lg:grid-cols-2 lg:pt-0">
        {/* Left: text content */}
        <div className="pb-10 lg:py-20">
          <h1
            className="text-4xl font-black uppercase leading-[1.05] text-black sm:text-5xl xl:text-7xl"
            style={{ fontFamily: "Archivo, sans-serif", fontVariationSettings: "'wdth' 125" }}
          >
            Find clothes that matches your style
          </h1>

          <p className="mt-6 max-w-lg text-base text-black/60">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </p>

          <a
            href="/shop"
            className="mt-8 inline-block w-full rounded-full bg-black px-14 py-4 text-center text-white transition hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:w-auto"
          >
            Shop Now
          </a>

          <dl className="mt-10 flex flex-wrap gap-y-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="pr-6 not-first:border-l not-first:border-black/10 not-first:pl-6 first:pl-0"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-3xl font-medium text-black xl:text-4xl">{stat.value}</dd>
                <p className="text-sm text-black/60 xl:text-base">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: image + decorative sparkles */}
        <div className="relative flex justify-center lg:justify-end">
          <Sparkle className="absolute right-0 top-4 h-16 w-16 text-black lg:top-10 lg:h-28 lg:w-28" />
          <Sparkle className="absolute left-2 top-1/3 h-9 w-9 text-black lg:h-14 lg:w-14" />
          <img
            src={heroImage}
            alt="Two models wearing black denim jackets over white hoodies"
            className="relative z-10 w-full max-w-md object-contain lg:max-w-none"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero