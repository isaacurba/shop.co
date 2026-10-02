import { useState } from 'react'

const Popup = () => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-black text-white px-8 sm:px-12 py-2 min-h-9 sm:min-h-10 flex items-center justify-center text-center text-xs sm:text-sm">
      {/* Banner Text */}
      <p className="max-w-2xl leading-snug">
        Sign up and get 20% off your first order.{' '}
        <a
          href="#signup"
          className="font-medium underline hover:text-gray-300 transition-colors ml-1 cursor-pointer"
        >
          Sign Up Now
        </a>
      </p>

      {/* Dismiss / Close Button */}
      <button
        type="button"
        aria-label="Close banner"
        onClick={() => setIsVisible(false)}
        className="hidden sm:flex absolute right-4 lg:right-[7%] top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors text-base p-1 leading-none"
      >
        ✕
      </button>
    </div>
  )
}

export default Popup