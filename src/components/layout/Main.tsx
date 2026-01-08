import { memo } from "react";
import { motion } from "framer-motion";
import img1 from "/Fiutbolka.kok.webp";
import img2 from "/futbolka.bejiviy.webp";
import { ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
} as const;

const Main = () => {
  return (
    <section
      className="
        w-full py-28
        bg-gradient-to-b from-[#0b0b0b] via-[#0f0f0f] to-black
        text-white
      "
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* CHAP TOMON RASMLAR */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15 }}
          className="relative flex justify-center lg:justify-start"
        >
          <motion.img
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            src={img1}
            alt="Fabrika"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="w-full max-w-[520px] rounded-3xl object-cover shadow-2xl"
          />

          <motion.img
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            src={img2}
            alt="Ishchi"
            loading="lazy"
            decoding="async"
            className="
              absolute bottom-[-60px] right-[-20px]
              w-[300px]
              rounded-3xl object-cover
              shadow-2xl
              border-8 border-[#0f0f0f]
              hidden sm:block
            "
          />
        </motion.div>

        {/* O‘NG TOMON MATN */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={fadeUp}
          className="space-y-6"
        >
          <span
            className="
              inline-flex items-center gap-2
              text-sm font-semibold uppercase tracking-widest
              text-orange-500
            "
          >
            ✦ 01. Biz haqimizda
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Extice — jahon darajasidagi <br />
            texnik to‘qimachilik <br />
            mahsulotlari ishlab chiqaruvchisi
          </h2>

          <p className="text-neutral-300 text-base leading-relaxed max-w-xl">
            1999-yilda Extice to‘qimachilik sohasiga paxta ipi ishlab chiqarish
            quvvatlari bilan kirib keldi. Zamonaviy texnologiyalarni
            malakali mutaxassislar bilan uyg‘unlashtirib, qisqa vaqt ichida
            yetakchi kompaniyaga aylandi.
          </p>

          <button
            type="button"
            className="
              inline-flex items-center gap-2
              px-8 py-4 rounded-full
              font-semibold
              text-black
              bg-orange-500 hover:bg-orange-400
              transition-all
              shadow-[0_10px_40px_rgba(249,115,22,0.35)]
            "
          >
            Biz haqimizda <ArrowUpRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Main);
