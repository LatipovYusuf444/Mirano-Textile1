import Navbar from "@/components/Navbar"
import About from "@/components/About"
import FeaturedServices from "@/components/FeaturedServices"
import Advange from "@/components/Advange"
import Main from "@/components/Main"

const Home = ({ onCartOpen }: { onCartOpen: () => void }) => {
  return (
    <>
      <Navbar onCartOpen={onCartOpen} />
      <About />
      <FeaturedServices />
      <Main />
      <Advange />
    </>
  )
}

export default Home
