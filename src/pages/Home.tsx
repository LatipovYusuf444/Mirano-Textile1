import Navbar from "@/components/Navbar"
import About from "@/components/About"
import FeaturedServices from "@/components/FeaturedServices"
import Advange from "@/components/Advange"
import Main from "@/components/Main"
import Figures from "@/components/Figures"

const Home = ({ onCartOpen }: { onCartOpen: () => void }) => {
  return (
    <>
      <Navbar onCartOpen={onCartOpen} />
      <About />
      <FeaturedServices />
      <Main />
      <Advange />
      <Figures />
    </>
  )
}

export default Home
