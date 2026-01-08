import logo from "@/assets/images/mirano-bg-text.webp";
import bgimage from "@/assets/images/bgimagesss.webp";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSelector, shallowEqual } from "react-redux";
import type { RootState } from "@/App/store";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { memo } from "react";
import telefonbg from "@/assets/images/telefonbg.webp"

const Navbar = memo(({ onCartOpen }: { onCartOpen: () => void }) => {
  const count = useSelector(
    (state: RootState) =>
      state.cart.items.reduce((sum, item) => sum + item.quantity, 0),
    shallowEqual
  );

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col">
      {/* ✅ Background image (responsiv) */}
      <img
        src={telefonbg}
        alt=""
        aria-hidden="true"
        className="
    absolute inset-0 -z-10
    h-full w-full
   
   
    sm:hidden
  "
        loading="eager"
        decoding="async"
      />

      {/* 🖥 DESKTOP background */}
      <img
        src={bgimage}
        alt=""
        aria-hidden="true"
        className="
    absolute inset-0 -z-10
    h-full w-full
    object-cover
    object-center
    scale-[1.02]
    hidden sm:block
  "
        loading="eager"
        decoding="async"
      />

      {/* ✅ Overlay (telefonlarda kuchliroq, text aniq ko‘rinsin) */}
      <div className="absolute inset-0 -z-10 bg-black/60 sm:bg-black/50 pointer-events-none" />
      {/* ✅ Past-burchaklarda vignette: luxury ko‘rinish + o‘qilishi oson */}
      <div className="absolute inset-0 -z-10 pointer-events-none [background:radial-gradient(circle_at_30%_20%,rgba(255,180,80,0.10),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.06),transparent_55%)]" />
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-50 [background:radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.85))]" />

      {/* HEADER */}
      <header className="relative z-10 flex items-center justify-between px-4 md:px-10 py-5">
        {/* LOGO (responsiv: tel kichik, desktop katta) */}
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          src={logo}
          alt="Mirano Logo"
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 object-contain"
          loading="lazy"
          decoding="async"
        />

        <div className="flex items-center gap-3">
          {/* CART */}
          <Button
            onClick={onCartOpen}
            className="
              relative
              bg-white/10
              border border-white/20
              hover:bg-white/20 hover:bg-orange-500
              rounded-full
              p-2 h-11 w-20
            "
          >
            🛒
            {count > 0 && (
              <span
                className="
                  absolute -top-1 -right-1
                  bg-orange-500
                  text-black
                  text-xs
                  font-bold
                  px-1.5 py-0.5
                  rounded-full
                "
              >
                {count}
              </span>
            )}
          </Button>

          {/* REGISTER */}
          <Link to="/register">
            <Button
              variant="outline"
              className="
                h-11 sm:h-12 px-5 sm:px-6 md:px-10
                text-sm md:text-lg font-semibold
                text-white bg-white/10 border-white/30
                hover:bg-orange-500 hover:border-orange-500
                transition-colors
              "
            >
              Register
            </Button>
          </Link>
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
          className="px-4 md:px-16 max-w-3xl space-y-5"
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
                h-12 rounded-4xl md:h-14 px-6 md:px-10
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
  );
});

export default Navbar;
