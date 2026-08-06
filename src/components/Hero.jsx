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
    h-[75vh]
    sm:h-[85vh]
    lg:h-screen
    lg:min-h-[650px]
    overflow-hidden
    font-sans
    bg-[#241810]
  "
>
  {/* BACKGROUND VIDEO */}
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


  {/* OVERLAY */}
  <div
    aria-hidden="true"
    className="
      absolute
      inset-0
      bg-[#241810]/45
    "
  />

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


  {/* CONTENT */}
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
      pb-10
      sm:pb-16
      md:pb-20
      text-white
      text-right
    `}
  >

    <h1
      className={`
        text-3xl
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


    <p
      className={`
        text-[#e2d2c2]
        text-sm
        sm:text-base
        md:text-lg
        mt-4
        max-w-2xl
        leading-7
        sm:leading-8
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


    <div
      className={`
        mt-6
        flex
        flex-wrap
        gap-3
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

      <Link
        to="/portfolio"
        className="
          bg-[#f5eadc]
          text-[#241810]
          px-5
          py-3
          rounded-xl
          font-medium
          text-sm
          sm:text-base
          hover:scale-105
          hover:bg-white
          transition-all
        "
      >
        مشاهده نمونه کارها
      </Link>


      <button
        type="button"
        onClick={scrollToOrder}
        className="
          border
          border-[#f0dfce]/40
          text-[#f5eadc]
          px-5
          py-3
          rounded-xl
          font-medium
          text-sm
          sm:text-base
          bg-[#241810]/20
          hover:bg-[#f5eadc]
          hover:text-[#241810]
          transition-all
        "
      >
        ثبت سفارش
      </button>

    </div>


    <div
      className={`
        mt-6
        flex
        gap-3
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

      <a
        href="https://wa.me/989123360752"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="واتساپ"
        className="
          w-11
          h-11
          rounded-full
          bg-[#241810]/45
          border
          border-white/10
          flex
          items-center
          justify-center
          hover:bg-white
          hover:scale-110
          transition
        "
      >
        <img src={whatsappIcon} alt="" className="w-5 h-5" />
      </a>


      <a
        href="#"
        aria-label="ایتا"
        className="
          w-11
          h-11
          rounded-full
          bg-[#241810]/45
          border
          border-white/10
          flex
          items-center
          justify-center
          hover:bg-white
          hover:scale-110
          transition
        "
      >
        <img src={eitaaIcon} alt="" className="w-5 h-5" />
      </a>


      <a
        href="#"
        aria-label="بله"
        className="
          w-11
          h-11
          rounded-full
          bg-[#241810]/45
          border
          border-white/10
          flex
          items-center
          justify-center
          hover:bg-white
          hover:scale-110
          transition
        "
      >
        <img src={baleIcon} alt="" className="w-5 h-5" />
      </a>

    </div>

  </div>
      </section>
    </>
  );
}