import Navbar from "@/components/layout/Navbar"
import About from "@/components/sections/About"
import FeaturedServices from "@/components/sections/FeaturedServices"
import Advange from "@/components/sections/Advange"
import Main from "@/components/layout/Main"
import Figures from "@/components/sections/Figures"
import Testimonials from "@/components/sections/Testimonials"
import Footer from "@/components/layout/Footer"

const Home = ({ onCartOpen }: { onCartOpen: () => void }) => {
  return (
    <>
      <Navbar onCartOpen={onCartOpen} />
      <About />
      <FeaturedServices />
      <Main />
      <Advange />
      <Figures />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Home
