import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import wood from "../assets/images/wood.webp";

export default function StorySection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // حرکت از پایین به بالا
  const yImg = useTransform(scrollYProgress, [0, 1], [200, -200]);

  // اول بزرگ‌تر میشه بعد نرمال میشه
  const scaleImg = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1.05, 1]);

  // متن هم نرم وارد میشه
  const yText = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[140vh] overflow-hidden bg-gradient-to-b from-[#120d08] via-[#1f140d] to-[#2b1d14] text-white"
    >
      {/* BACKGROUND IMAGE (70% width) */}
      <motion.img
        src={wood}
        style={{
          y: yImg,
          scale: scaleImg
        }}
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[80%]
          opacity-40 
          blur-[1px]
          rounded-3xl
        "
      />

      {/* CONTENT */}
      <div className="relative h-full flex items-center justify-center px-6">
        <motion.div
  style={{ y: yText, opacity }}
  className="text-center max-w-5xl"
>
  <h2 className="text-4xl md:text-6xl font-bold text-[#f8f3ee]">
    پذیرای سفارشات اختصاصی شما
  </h2>

  <p className="text-[#d7c5b5] mt-6 text-lg max-w-2xl mx-auto leading-8">
    صنایع چوب رضائی با بیش از ۳۰ سال تجربه در طراحی و تولید انواع سرویس خواب،
    کمد، کتابخانه، میز و محصولات چوبی سفارشی، آماده اجرای پروژه‌های شما با
    کیفیت کارگاهی و قیمت مستقیم تولیدکننده است.
  </p>

  {/* آمار */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <h3 className="text-4xl font-bold text-white">30+</h3>
      <p className="text-[#d7c5b5] mt-2">سال تجربه</p>
    </div>

    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <h3 className="text-4xl font-bold text-white">1000+</h3>
      <p className="text-[#d7c5b5] mt-2">پروژه اجرا شده</p>
    </div>

    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <h3 className="text-4xl font-bold text-white">100%</h3>
      <p className="text-[#d7c5b5] mt-2">سفارشی سازی</p>
    </div>

    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <h3 className="text-4xl font-bold text-white">✓</h3>
      <p className="text-[#d7c5b5] mt-2">پشتیبانی و مشاوره</p>
    </div>
  </div>

  {/* مزایا */}
  <div className="mt-12 grid md:grid-cols-2 gap-4 text-right">
    <div className="bg-white/5 rounded-xl p-4">
      ✓ تولید مستقیم بدون واسطه
    </div>

    <div className="bg-white/5 rounded-xl p-4">
      ✓ امکان طراحی سفارشی کامل
    </div>

    <div className="bg-white/5 rounded-xl p-4">
      ✓ انتخاب رنگ و متریال دلخواه
    </div>

    <div className="bg-white/5 rounded-xl p-4">
      ✓ مشاوره و اندازه‌گیری
    </div>
  </div>

  {/* دکمه ها */}
  <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
    <a
      href="#portfolio"
      className="
        bg-white
        text-[#2b1d14]
        px-8
        py-4
        rounded-xl
        font-medium
        hover:scale-105
        transition-all
      "
    >
      مشاهده نمونه کارها
    </a>

    <a
      href="#order"
      className="
        border
        border-white/30
        px-8
        py-4
        rounded-xl
        font-medium
        hover:bg-white
        hover:text-[#2b1d14]
        transition-all
      "
    >
      دریافت مشاوره رایگان
    </a>
  </div>
</motion.div>
      </div>

      {/* bottom glow */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#120d08] to-transparent" />
    </section>
  );
}