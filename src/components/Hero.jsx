import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import heroVideo from "../assets/videos/hero-video.mp4";

import whatsappIcon from "../assets/icons/whatsapp.svg";
import eitaaIcon from "../assets/icons/eitaa.svg";
import baleIcon from "../assets/icons/bale.svg";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll to Order Section
  const scrollToOrder = () => {
    const orderSection = document.getElementById("order");

    if (orderSection) {
      orderSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* =========================
          SEO
      ========================== */}
      <Helmet>
        <title>
          صنایع چوب رضائی | ساخت کمد دیواری و سرویس خواب سفارشی
        </title>

        <meta
          name="description"
          content="صنایع چوب رضائی؛ طراحی و ساخت کمد دیواری، سرویس خواب، کتابخانه، میز و مصنوعات چوبی سفارشی در تهران با بیش از ۳۰ سال تجربه و تولید مستقیم کارگاهی."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <meta
          property="og:title"
          content="صنایع چوب رضائی | ساخت مصنوعات چوبی سفارشی"
        />

        <meta
          property="og:description"
          content="طراحی و ساخت کمد دیواری، سرویس خواب و مصنوعات چوبی سفارشی در تهران با بیش از ۳۰ سال تجربه."
        />

        <meta
          property="og:type"
          content="website"
        />

        {/* Local Business Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "صنایع چوب رضائی",
              "description": "کارگاه طراحی و ساخت کمد دیواری، سرویس خواب و مصنوعات چوبی سفارشی با بیش از ۳۰ سال تجربه",
              "telephone": "+989123360752",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "اتوبان آزادگان، خیابان شمس‌آباد",
                "addressLocality": "تهران",
                "addressCountry": "IR"
              },
              "openingHours": [
                "Sa-Th 09:00-20:00"
              ]
            }
          `}
        </script>
      </Helmet>

      {/* =========================
          HERO
      ========================== */}
      <section
        dir="rtl"
        aria-label="صنایع چوب رضائی"
        className="
          relative
          h-screen
          min-h-[650px]
          overflow-hidden
          font-sans
          bg-[#241810]
        "
      >

        {/* =========================
            BACKGROUND VIDEO
        ========================== */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            scale-[1.02]
          "
        >
          <source
            src={heroVideo}
            type="video/mp4"
          />
        </video>


        {/* =========================
            OVERLAY
        ========================== */}

        {/* Warm brown overlay */}
        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            bg-[#241810]/45
          "
        />

        {/* Bottom gradient */}
        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#1b130d]/90
            via-[#241810]/30
            to-transparent
          "
        />

        {/* Side gradient */}
        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            bg-gradient-to-l
            from-[#1b130d]/30
            via-transparent
            to-transparent
          "
        />


        {/* =========================
            CONTENT
        ========================== */}
        <div
          className={`
            relative
            z-10
            h-full
            flex
            flex-col
            justify-end
            px-5
            sm:px-8
            md:px-12
            lg:px-20
            pb-14
            sm:pb-16
            md:pb-20
            text-white
            text-right
          `}
        >

          {/* TITLE */}
          <h1
            className={`
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              tracking-tight
              leading-tight
              text-[#f5eadc]
              transition-all
              duration-700

              ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }
            `}
          >
            صنایع چوب رضائی
          </h1>


          {/* DESCRIPTION */}
          <p
            className={`
              text-[#e2d2c2]
              text-sm
              sm:text-base
              md:text-lg
              mt-5
              max-w-2xl
              leading-8
              transition-all
              duration-700
              delay-100
              ml-auto

              ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }
            `}
          >
            طراحی و ساخت انواع سرویس خواب، کمد، کتابخانه، میز و
            مصنوعات چوبی سفارشی با بیش از ۳۰ سال تجربه و تولید
            مستقیم کارگاهی.
          </p>


          {/* =========================
              CTA BUTTONS
          ========================== */}
          <div
            className={`
              mt-8
              flex
              flex-wrap
              gap-3
              sm:gap-4
              justify-end
              transition-all
              duration-700
              delay-200

              ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }
            `}
          >

            {/* Portfolio */}
            <Link
              to="/portfolio"
              className="
                bg-[#f5eadc]
                text-[#241810]
                px-5
                sm:px-6
                py-3
                rounded-xl
                font-medium
                text-sm
                sm:text-base
                hover:scale-105
                hover:bg-white
                transition-all
                duration-300
              "
            >
              مشاهده نمونه کارها
            </Link>


            {/* Order */}
            <button
              type="button"
              onClick={scrollToOrder}
              className="
                border
                border-[#f0dfce]/40
                text-[#f5eadc]
                px-5
                sm:px-6
                py-3
                rounded-xl
                font-medium
                text-sm
                sm:text-base
                bg-[#241810]/20
                hover:bg-[#f5eadc]
                hover:text-[#241810]
                hover:scale-105
                transition-all
                duration-300
              "
            >
              ثبت سفارش
            </button>

          </div>


          {/* =========================
              SOCIALS
          ========================== */}
          <div
            className={`
              mt-7
              flex
              gap-3
              sm:gap-4
              justify-end
              transition-all
              duration-700
              delay-300

              ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }
            `}
          >

            {/* WhatsApp */}
            <a
              href="https://wa.me/989123360752"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ارتباط با صنایع چوب رضائی در واتساپ"
              className="
                w-11
                h-11
                sm:w-12
                sm:h-12
                rounded-full
                bg-[#241810]/45
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:bg-white
                hover:scale-110
                transition-all
                duration-300
              "
            >
              <img
                src={whatsappIcon}
                alt=""
                className="w-5 h-5"
              />
            </a>


            {/* Eitaa */}
            <a
              href="https://eitaa.com/yourid"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ارتباط با صنایع چوب رضائی در ایتا"
              className="
                w-11
                h-11
                sm:w-12
                sm:h-12
                rounded-full
                bg-[#241810]/45
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:bg-white
                hover:scale-110
                transition-all
                duration-300
              "
            >
              <img
                src={eitaaIcon}
                alt=""
                className="w-5 h-5"
              />
            </a>


            {/* Bale */}
            <a
              href="https://ble.ir/yourid"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ارتباط با صنایع چوب رضائی در بله"
              className="
                w-11
                h-11
                sm:w-12
                sm:h-12
                rounded-full
                bg-[#241810]/45
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:bg-white
                hover:scale-110
                transition-all
                duration-300
              "
            >
              <img
                src={baleIcon}
                alt=""
                className="w-5 h-5"
              />
            </a>

          </div>

        </div>
      </section>
    </>
  );
}
