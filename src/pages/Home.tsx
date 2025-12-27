import Navbar from "@/components/Navbar"
import About from "@/components/About"
import FeaturedServices from "@/components/FeaturedServices"
import Advange from "@/components/Advange"
import Main from "@/components/Main"
import Figures from "@/components/Figures"
import Testimonials from "@/components/Testimonials"
import Footer from "@/components/Footer"

const Home = ({ onCartOpen }: { onCartOpen: () => void }) => {
  return (
    <>
      <Navbar onCartOpen={onCartOpen} />
      <About />
      <FeaturedServices />
      <Main />
      <Advange />
      <Figures />
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default Home
