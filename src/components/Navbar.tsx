import logo from "@/assets/images/15709ad1-02fe-4017-b9b1-af49907a1976.png"
import bgimage from "@/assets/images/bg-textile-100.webp"
import { ArrowUpRight, ShoppingCart } from "lucide-react"
import { Button } from "./ui/button"
import { useSelector } from "react-redux"
import type { RootState } from "@/App/store"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Navbar = ({ onCartOpen }: { onCartOpen: () => void }) => {
  const count = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  )

  return (
    <div
      className="
        min-h-screen w-full
        bg-cover bg-center bg-no-repeat
        flex flex-col
      "
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      {/* ===== HEADER ===== */}
      <div className="flex items-center justify-between px-4 md:px-10 py-5">
        <motion.img
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-14 h-14 md:w-20 md:h-20 object-contain"
          src={logo}
          alt="Mirano Logo"
        />

        <div className="flex items-center gap-3">
          {/* CART */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onCartOpen}
            className="
              relative w-12 h-12 md:w-14 md:h-12
              rounded-2xl
              flex items-center justify-center
              backdrop-blur-md bg-white/10
              border border-white/20
              shadow-lg
            "
          >
            <ShoppingCart className="text-white" />

            {count > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="
                  absolute -top-2 -right-2
                  min-w-[18px] h-[18px]
                  bg-orange-500 text-white text-xs
                  rounded-full flex items-center justify-center px-1
                "
              >
                {count}
              </motion.span>
            )}
          </motion.button>

          {/* REGISTER */}
          <Button
            className="
              h-12 px-6 md:px-10
              text-sm md:text-lg font-semibold
              backdrop-blur-md bg-white/10
              border border-white/30
              text-white
              hover:bg-white/20
              transition-all duration-300
            "
            variant="outline"
          >
            Register
          </Button>
        </div>
      </div>

      <hr className="border-white/30" />

      {/* ===== HERO ===== */}
      <div className="flex-1 flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="
            px-4 md:px-16
            max-w-3xl
            space-y-4
          "
        >
          <h1
            className="
              font-extrabold text-white
              text-3xl sm:text-4xl md:text-6xl lg:text-6xl
              leading-tight
            "
          >
            Sifatli Textil
            <span className="text-orange-400"> San'ati</span>
          </h1>

          <p
            className="
              text-white/90
              text-sm sm:text-base md:text-xl
              font-medium
            "
          >
            Bizning matolarimiz zamonaviy texnologiyalar va an'anaviy
            to'quv uslublari uyg'unligida yaratiladi.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="pt-6"
          >
            <Link to="/catalog">
              <Button
                className="
      h-12 md:h-14 px-6 md:px-10
      text-sm md:text-base font-semibold
      backdrop-blur-md bg-white/10
      border border-white/30
      hover:bg-orange-400/80
      transition-all text-white duration-300
      flex items-center gap-2
    "
                variant="outline"
              >
                Katalog Ko'rish <ArrowUpRight />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Navbar
