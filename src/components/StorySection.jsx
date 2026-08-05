import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import wood from "../assets/images/wood.webp";

export default function StorySection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // حرکت تصویر
  const yImg = useTransform(
    scrollYProgress,
    [0, 1],
    [120, -120]
  );

  // بزرگ شدن و برگشت تصویر
  const scaleImg = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.15, 1.05, 1]
  );

  // حرکت متن
  const yText = useTransform(
    scrollYProgress,
    [0, 1],
    [60, -60]
  );

  // ظاهر و محو شدن متن
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0]
  );

  return (
    <section
      ref={ref}
      className="
        relative
        min-h-screen
        py-24
        md:py-32
        overflow-hidden
        bg-gradient-to-b
        from-[#120d08]
        via-[#1f140d]
        to-[#2b1d14]
        text-white
      "
    >
      {/* BACKGROUND IMAGE */}
      <motion.img
        src={wood}
        alt=""
        style={{
          y: yImg,
          scale: scaleImg,
        }}
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2

          w-[150%]
          max-w-none

          sm:w-[120%]
          md:w-[90%]
          lg:w-[80%]

          opacity-30
          blur-[1px]
          rounded-3xl

          pointer-events-none
          select-none
        "
      />

      {/* DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-black/20
          pointer-events-none
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          min-h-[calc(100vh-12rem)]
          flex
          items-center
          justify-center
          px-5
          sm:px-8
          md:px-12
        "
      >
        <motion.div
          style={{
            y: yText,
            opacity,
          }}
          className="
            w-full
            max-w-5xl
            text-center
          "
        >
          {/* TITLE */}
          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl

              font-bold
              leading-[1.4]
              text-[#f8f3ee]

              max-w-4xl
              mx-auto
            "
          >
            پذیرای سفارشات اختصاصی شما
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              text-[#d7c5b5]

              mt-5
              sm:mt-6

              text-base
              sm:text-lg

              leading-8

              max-w-2xl
              mx-auto

              px-1
            "
          >
            صنایع چوب رضائی با بیش از ۳۰ سال تجربه در طراحی و تولید انواع
            سرویس خواب، کمد، کتابخانه، میز و محصولات چوبی سفارشی، آماده اجرای
            پروژه‌های شما با کیفیت کارگاهی و قیمت مستقیم تولیدکننده است.
          </p>

          {/* STATS */}
          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-4

              gap-3
              sm:gap-5
              md:gap-6

              mt-10
              sm:mt-12
              md:mt-14
            "
          >
            {/* STAT 1 */}
            <div
              className="
                bg-white/5
                backdrop-blur-sm
                rounded-2xl

                p-4
                sm:p-5
                md:p-6

                border
                border-white/10
              "
            >
              <h3
                className="
                  text-3xl
                  sm:text-4xl
                  font-bold
                  text-white
                "
              >
                30+
              </h3>

              <p
                className="
                  text-[#d7c5b5]
                  mt-2
                  text-sm
                  sm:text-base
                "
              >
                سال تجربه
              </p>
            </div>

            {/* STAT 2 */}
            <div
              className="
                bg-white/5
                backdrop-blur-sm
                rounded-2xl

                p-4
                sm:p-5
                md:p-6

                border
                border-white/10
              "
            >
              <h3
                className="
                  text-3xl
                  sm:text-4xl
                  font-bold
                  text-white
                "
              >
                1000+
              </h3>

              <p
                className="
                  text-[#d7c5b5]
                  mt-2
                  text-sm
                  sm:text-base
                "
              >
                پروژه اجرا شده
              </p>
            </div>

            {/* STAT 3 */}
            <div
              className="
                bg-white/5
                backdrop-blur-sm
                rounded-2xl

                p-4
                sm:p-5
                md:p-6

                border
                border-white/10
              "
            >
              <h3
                className="
                  text-3xl
                  sm:text-4xl
                  font-bold
                  text-white
                "
              >
                100%
              </h3>

              <p
                className="
                  text-[#d7c5b5]
                  mt-2
                  text-sm
                  sm:text-base
                "
              >
                سفارشی سازی
              </p>
            </div>

            {/* STAT 4 */}
            <div
              className="
                bg-white/5
                backdrop-blur-sm
                rounded-2xl

                p-4
                sm:p-5
                md:p-6

                border
                border-white/10
              "
            >
              <h3
                className="
                  text-3xl
                  sm:text-4xl
                  font-bold
                  text-white
                "
              >
                ✓
              </h3>

              <p
                className="
                  text-[#d7c5b5]
                  mt-2
                  text-sm
                  sm:text-base
                "
              >
                پشتیبانی و مشاوره
              </p>
            </div>
          </div>

          {/* ADVANTAGES */}
          <div
            className="
              mt-8
              sm:mt-10
              md:mt-12

              grid
              grid-cols-1
              md:grid-cols-2

              gap-3
              sm:gap-4

              text-right
            "
          >
            <div
              className="
                bg-white/5
                rounded-xl
                p-4
                sm:p-5

                text-sm
                sm:text-base

                border
                border-white/5
              "
            >
              ✓ تولید مستقیم بدون واسطه
            </div>

            <div
              className="
                bg-white/5
                rounded-xl
                p-4
                sm:p-5

                text-sm
                sm:text-base

                border
                border-white/5
              "
            >
              ✓ امکان طراحی سفارشی کامل
            </div>

            <div
              className="
                bg-white/5
                rounded-xl
                p-4
                sm:p-5

                text-sm
                sm:text-base

                border
                border-white/5
              "
            >
              ✓ انتخاب رنگ و متریال دلخواه
            </div>

            <div
              className="
                bg-white/5
                rounded-xl
                p-4
                sm:p-5

                text-sm
                sm:text-base

                border
                border-white/5
              "
            >
              ✓ مشاوره و اندازه‌گیری
            </div>
          </div>

          {/* BUTTONS */}
          <div
            className="
              flex
              flex-col
              sm:flex-row

              justify-center

              gap-3
              sm:gap-4

              mt-8
              sm:mt-10
              md:mt-12
            "
          >
            <a
              href="#portfolio"
              className="
                w-full
                sm:w-auto

                bg-white
                text-[#2b1d14]

                px-7
                sm:px-8

                py-3.5
                sm:py-4

                rounded-xl

                font-medium

                text-center

                hover:scale-105
                transition-all
              "
            >
              مشاهده نمونه کارها
            </a>

            <a
              href="#order"
              className="
                w-full
                sm:w-auto

                border
                border-white/30

                px-7
                sm:px-8

                py-3.5
                sm:py-4

                rounded-xl

                font-medium

                text-center

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

      {/* BOTTOM GLOW */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-32
          sm:h-40

          bg-gradient-to-t
          from-[#120d08]
          to-transparent

          pointer-events-none
        "
      />
    </section>
  );
}

