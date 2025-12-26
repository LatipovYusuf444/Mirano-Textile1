import { motion } from "framer-motion"
import {
  Scissors,
  Factory,
  Palette,
  Truck,
} from "lucide-react"

const services = [
  {
    title: "Maxsus Tikuv",
    desc: "Buyurtma asosida yuqori sifatli textile mahsulotlar.",
    icon: Scissors,
  },
  {
    title: "Zamonaviy Ishlab Chiqarish",
    desc: "Yangi texnologiyalar asosida ishlab chiqarish jarayoni.",
    icon: Factory,
  },
  {
    title: "Eksklyuziv Dizayn",
    desc: "Trend va an’anaviy uslublar uyg‘unligi.",
    icon: Palette,
  },
  {
    title: "Tezkor Yetkazib Berish",
    desc: "O‘z vaqtida va xavfsiz yetkazib berish xizmati.",
    icon: Truck,
  },
]

const FeaturedServices = () => {
  return (
    <section className="w-full bg-neutral-950 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="uppercase tracking-widest text-orange-400 text-sm font-semibold">
            02. Featured Services
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2">
            Bizning Premium Xizmatlar
          </h2>
        </motion.div>

        {/* ===== CAROUSEL ===== */}
        <motion.div
          drag="x"
          dragConstraints={{ left: -800, right: 0 }}
          className="flex gap-6 cursor-grab active:cursor-grabbing"
        >
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.02 }}
                className="
                  min-w-[280px] sm:min-w-[320px]
                  rounded-3xl
                  backdrop-blur-xl bg-white/5
                  border border-white/10
                  p-8
                  shadow-[0_30px_80px_rgba(0,0,0,0.45)]
                  relative overflow-hidden
                "
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 space-y-4">
                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      flex items-center justify-center
                      bg-orange-500/20
                      border border-orange-400/30
                    "
                  >
                    <Icon className="text-orange-400 w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="text-white/70 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* ===== HINT ===== */}
        <p className="text-white/40 text-sm mt-6">
          ⟵ Surish orqali ko‘ring
        </p>
      </div>
    </section>
  )
}

export default FeaturedServices
