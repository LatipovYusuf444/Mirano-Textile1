import Navbar from "@/components/Navbar"
import About from "@/components/About"
import FeaturedServices from "@/components/FeaturedServices"

const Home = ({ onCartOpen }: { onCartOpen: () => void }) => {
  return (
    <>
      <Navbar onCartOpen={onCartOpen} />
      <About />
      <FeaturedServices />
    </>
  )
}

export default Home
