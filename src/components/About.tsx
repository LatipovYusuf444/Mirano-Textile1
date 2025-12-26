import img from "@/assets/svg/picture-tailor-s-desktop-sewing-workshop.webp"
import { motion } from "framer-motion"

const About = () => {
  return (
    <section className="w-full bg-neutral-950 py-20">
      <div
        className="
          max-w-7xl mx-auto
          px-4 md:px-10
          grid grid-cols-1 md:grid-cols-2
          items-center gap-14
        "
      >
        {/* ===== IMAGE ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <div
            className="
              absolute -inset-4
              rounded-3xl
              bg-gradient-to-br from-orange-500/30 to-transparent
              blur-2xl
            "
          />
          <img
            src={img}
            alt="Textile Workshop"
            className="
              relative z-10
              rounded-3xl
              w-full max-w-[420px]
              object-cover
              shadow-2xl
              hover:scale-105
              transition-transform duration-700
            "
          />
        </motion.div>

        {/* ===== CONTENT ===== */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-6"
        >
          <span className="uppercase tracking-widest text-orange-400 text-sm font-semibold">
            About Mirano Textile
          </span>

          <h2
            className="
              text-3xl sm:text-4xl lg:text-5xl
              font-extrabold leading-tight
            "
          >
            An'anaviy hunarmandchilik
            <br />
            <span className="text-orange-400">
              Zamonaviy dizayn bilan
            </span>
          </h2>

          <p className="text-white/80 text-base leading-relaxed max-w-xl">
            Mirano Textile kompaniyasi sifatli matolar ishlab chiqarishda
            an’anaviy to‘quv san’ati va zamonaviy texnologiyalarni
            uyg‘unlashtiradi. Har bir mahsulot – bu mukammallikka bo‘lgan
            sadoqatimizning ifodasidir.
          </p>

          {/* ===== STATS ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            {[
              { label: "Yillik Tajriba", value: "10+" },
              { label: "Mahsulotlar", value: "500+" },
              { label: "Hamkorlar", value: "120+" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.7, ease: "easeOut" }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="
        relative group
        rounded-3xl
        p-6 text-center
        backdrop-blur-xl
        bg-white/5
        border border-white/10
        shadow-[0_20px_60px_rgba(0,0,0,0.4)]
        overflow-hidden
      "
              >
                {/* Glow effect */}
                <div
                  className="
          absolute inset-0
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
          bg-gradient-to-br
          from-orange-500/20 via-transparent to-transparent
        "
                />

                <h3
                  className="
          relative z-10
          text-3xl md:text-4xl
          font-extrabold
          tracking-tight
          text-orange-400
        "
                >
                  {item.value}
                </h3>

                <p
                  className="
          relative z-10
          mt-1
          text-xs md:text-sm
          uppercase tracking-widest
          text-white/70
        "
                >
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default About
