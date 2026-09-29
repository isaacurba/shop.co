// Reusable 4-point star. Size and position are controlled by the parent via className.
const Sparkle = ({ className = "" }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M50 0C54 30 70 46 100 50C70 54 54 70 50 100C46 70 30 54 0 50C30 46 46 30 50 0Z" />
  </svg>
)

export default Sparkle
