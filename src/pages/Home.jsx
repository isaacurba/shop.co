import Navbar from "../components/navbar/Navbar"
import Hero from "../components/hero/Hero"
import Brand from "../components/hero/Brand" 
import NewArrival from "../components/products/NewArrival"
import DressStyle from "../components/dressStyle/DressStyle"
import Testimonials from "../components/testimonials/Testimonials"
import Footer from "../components/footer/Footer"

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Brand />
      <NewArrival/>
      <DressStyle/>
      <Testimonials />
      <Footer />
    </main>
  )
}

export default Home;