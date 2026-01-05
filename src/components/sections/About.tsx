import img from "@/assets/images/t shirt.webp"
import { motion } from "framer-motion"

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const About = () => {
  return (
    <section className="relative w-full bg-neutral-950 py-24 overflow-hidden">
      {/* Textile side lines */}
      <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-orange-500/0 via-orange-500/30 to-orange-500/0" />
      <div className="absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-orange-500/0 via-orange-500/30 to-orange-500/0" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 items-center gap-16 relative z-10"
      >
        {/* IMAGE */}
        <motion.div variants={fadeUp} className="relative flex justify-center">
          {/* Soft luxury glow */}
          <div className="absolute -inset-3 rounded-3xl bg-orange-500/10 blur-xl" />

          <img
            src={img}
            alt="Textile Workshop"
            loading="lazy"
            className="
              relative z-10
              rounded-3xl
              w-full max-w-[420px]
              object-cover
              shadow-xl
            "
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div variants={fadeUp} className="text-white space-y-7">
          <span className="uppercase tracking-[0.3em] text-orange-400 text-xs font-semibold">
            About Mirano Textile
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            An&apos;anaviy hunarmandchilik
            <br />
            <span className="text-orange-400">Zamonaviy dizayn bilan</span>
          </h2>

          <p className="text-white/75 text-base leading-relaxed max-w-xl">
            Mirano Textile kompaniyasi sifatli matolar ishlab chiqarishda
            an’anaviy to‘quv san’ati va zamonaviy texnologiyalarni
            uyg‘unlashtiradi. Har bir mahsulot — mukammallikka bo‘lgan
            sadoqatimizning ifodasidir.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            {[
              { label: "Yillik Tajriba", value: "10+" },
              { label: "Mahsulotlar", value: "500+" },
              { label: "Hamkorlar", value: "120+" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="
                  rounded-2xl
                  p-6 text-center
                  bg-white/5
                  border border-white/10
                  shadow-md
                  transition-all duration-300
                  hover:bg-white/10
                  hover:-translate-y-1
                "
              >
                <h3 className="text-3xl md:text-4xl font-extrabold text-orange-400">
                  {item.value}
                </h3>
                <p className="mt-1 text-xs md:text-sm uppercase tracking-widest text-white/70">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
