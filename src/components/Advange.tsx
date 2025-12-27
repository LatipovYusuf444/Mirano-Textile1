import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

type ProcessItem = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

const processData: ProcessItem[] = [
  {
    id: 1,
    title: "Mato Ishlab Chiqarish",
    description:
      "Biz matoni mustahkamlash, qayta to‘qish va tikuvlarni professional tarzda ta’mirlash ishlarini bajaramiz.",
    icon: "🧵",
  },
  {
    id: 2,
    title: "Global Eksport",
    description:
      "Mahsulotlarni saqlash, logistika va xalqaro bozorga chiqarishda yordam beramiz.",
    icon: "🌍",
  },
  {
    id: 3,
    title: "Rivojlanish va Takomillashtirish",
    description:
      "Dizaynlarni tahlil qilib, sifat va samaradorlikni doimiy yaxshilab boramiz.",
    icon: "📐",
  },
  {
    id: 4,
    title: "Uzoq Muddatli Hamkorlik",
    description:
      "Mijozlar bilan ishonchli va barqaror hamkorlik aloqalarini yo‘lga qo‘yamiz.",
    icon: "🤝",
  },
  {
    id: 5,
    title: "Sifat Nazorati",
    description:
      "Har bir mahsulot qat’iy sifat nazoratidan o‘tkazilib, eng yuqori standartlarga moslanadi.",
    icon: "✅",
  },
  {
    id: 6,
    title: "Innovatsion Yondashuv",
    description:
      "Zamonaviy texnologiyalar va yangi yechimlar orqali raqobatbardosh mahsulotlar yaratamiz.",
    icon: "🚀",
  },
];

const ProcessCarousel = () => {
  return (
    <section className="bg-[#0e0e0e] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* SARLAVHA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            To‘qimachilik Ish Jarayoni
          </h2>
          <p className="mt-4 text-sm tracking-[3px] text-[#c9a44c] uppercase">
            Mukammal Natijalar Uchun
          </p>
        </div>

        {/* CAROUSEL */}
        <Swiper
          modules={[Autoplay]}
          loop
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            768: { slidesPerView: 2.2 },
            1200: { slidesPerView: 3.5 },
          }}
          className="select-none"
        >
          {processData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative h-[320px] rounded-3xl border border-white/5 bg-gradient-to-br from-[#1a1a1a] to-[#111] p-10 text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(201,164,76,0.25)]">

                <div className="text-5xl mb-6">{item.icon}</div>

                <h3 className="text-xl font-semibold text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>

                <span className="absolute bottom-6 right-8 text-6xl font-bold text-white/5">
                  {String(item.id).padStart(2, "0")}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProcessCarousel;
