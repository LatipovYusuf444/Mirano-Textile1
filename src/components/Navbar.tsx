import logo from "@/assets/images/15709ad1-02fe-4017-b9b1-af49907a1976.png"
import bgimage from "@/assets/images/bg-textile-100.webp"
import { ArrowUpRight, ShoppingCart } from "lucide-react"
import { Button } from "./ui/button"
import { useSelector, shallowEqual } from "react-redux"
import type { RootState } from "@/App/store"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { memo } from "react"

const Navbar = memo(({ onCartOpen }: { onCartOpen: () => void }) => {
  const count = useSelector(
    (state: RootState) =>
      state.cart.items.reduce((sum, item) => sum + item.quantity, 0),
    shallowEqual
  )

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col will-change-transform"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      {/* HEADER */}
      <header className="relative z-10 flex items-center justify-between px-4 md:px-10 py-5">
        {/* LOGO */}
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          src={logo}
          alt="Mirano Logo"
          className="w-14 h-14 md:w-20 md:h-20 object-contain"
          loading="lazy"
        />

        <div className="flex items-center gap-3">
          {/* CART */}
          <button
            onClick={onCartOpen}
            className="
              relative w-12 h-12 md:w-14 md:h-12 rounded-2xl
              flex items-center justify-center
              bg-white/10 border border-white/20
              shadow-md
              will-change-transform
            "
          >
            <ShoppingCart className="text-white" />
            {count > 0 && (
              <span
                className="
                  absolute -top-2 -right-2 min-w-[18px] h-[18px]
                  bg-orange-500 text-white text-xs rounded-full
                  flex items-center justify-center px-1
                "
              >
                {count}
              </span>
            )}
          </button>

          {/* REGISTER */}
          <Button
            variant="outline"
            className="
              h-12 px-6 md:px-10
              text-sm md:text-lg font-semibold
              text-white bg-white/10 border-white/30
              hover:bg-orange-500 hover:border-orange-500
              transition-colors
            "
          >
            Register
          </Button>
        </div>
      </header>

      <hr className="relative z-10 border-white/20" />

      {/* HERO */}
      <main className="relative z-10 flex-1 flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="px-4 md:px-16 max-w-3xl space-y-5 will-change-transform"
        >
          <h1 className="font-extrabold text-white text-3xl sm:text-4xl md:text-6xl leading-tight">
            Sifatli Textil
            <span className="text-orange-400"> San'ati</span>
          </h1>

          <p className="text-white/90 text-sm sm:text-base md:text-xl font-medium">
            Bizning matolarimiz zamonaviy texnologiyalar va an’anaviy
            to‘quv uslublari uyg‘unligida yaratiladi.
          </p>

          <Link to="/catalog">
            <Button
              className="
                h-12 md:h-14 px-6 md:px-10
                text-sm md:text-base font-semibold
                text-white bg-orange-500 hover:bg-orange-600
                shadow-lg transition-colors
                flex items-center gap-2
              "
            >
              Katalog Ko‘rish <ArrowUpRight />
            </Button>
          </Link>
        </motion.div>
      </main>
    </div>
  )
})

export default Navbar
