import { useEffect, useState } from "react";
import {
  useLocation,
  Link,
  NavLink,
  useNavigate,
} from "react-router-dom";

import logo from "../assets/icons/logo.jpeg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";


  // ==========================================
  // SCROLL DETECTION
  // ==========================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  // ==========================================
  // GO TO HOME
  // ==========================================

  const goToHomeSection = (sectionId) => {

    // اگر همین الان در Home هستیم
    if (isHome) {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }


    // اگر در صفحه دیگری هستیم
    navigate("/");


    // صبر می‌کنیم Home رندر شود
    setTimeout(() => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };


  // ==========================================
  // NAV LINK STYLE
  // ==========================================

  const navLinkClass = ({ isActive }) =>
    `
      transition-all
      duration-200
      whitespace-nowrap

      ${
        isActive
          ? "text-white"
          : "text-[#f5eadc]/80 hover:text-white"
      }
    `;


  return (
    <header
      className="
        absolute
        top-0
        left-0
        w-full
        z-50
      "
    >

      <nav
        dir="rtl"
        aria-label="منوی اصلی سایت"
        className={`
          mx-auto

          w-[92%]
          md:w-[85%]

          mt-4

          px-4
          sm:px-5
          md:px-8

          py-3

          flex
          items-center
          justify-between

          rounded-2xl
          border

          transition-all
          duration-300

          text-[#f5eadc]

          backdrop-blur-xl

          ${
            isHome
              ? scrolled
                ? "bg-[#2a1a12]/75 border-[#c8a27a]/30 shadow-lg"
                : "bg-[#2a1a12]/30 border-[#c8a27a]/10"
              : "bg-[#2a1a12]/90 border-[#c8a27a]/30 shadow-lg"
          }
        `}
      >

        {/* ==========================================
            RIGHT SIDE — DESKTOP NAVIGATION
        ========================================== */}

        <div
          className="
            hidden
            md:flex
            items-center
            gap-7
            lg:gap-9
            text-sm
          "
        >

          {/* HOME */}

          <NavLink
            to="/"
            className={navLinkClass}
          >
            خانه
          </NavLink>


          {/* PORTFOLIO SECTION */}

          <button
            type="button"
            onClick={() => goToHomeSection("portfolio")}
            className="
              text-[#f5eadc]/80
              hover:text-white

              transition-all
              duration-200

              whitespace-nowrap

              bg-transparent
              border-0

              cursor-pointer

              p-0

              font-inherit
            "
          >
            نمونه کارها
          </button>


          {/* FULL PORTFOLIO PAGE */}

          <NavLink
            to="/portfolio"
            className={navLinkClass}
          >
            گالری کامل
          </NavLink>


          {/* ORDER */}

          <button
            type="button"
            onClick={() => goToHomeSection("order")}
            className="
              text-[#f5eadc]/80
              hover:text-white

              transition-all
              duration-200

              whitespace-nowrap

              bg-transparent
              border-0

              cursor-pointer

              p-0

              font-inherit
            "
          >
            ثبت سفارش
          </button>

        </div>


        {/* ==========================================
            LEFT SIDE — LOGO
        ========================================== */}

        <Link
          to="/"
          aria-label="صنایع چوب رضائی - صفحه اصلی"
          className="
            flex
            items-center

            gap-3
            sm:gap-4

            flex-shrink-0
          "
        >

          <img
            src={logo}
            alt="لوگوی صنایع چوب رضائی"

            width="56"
            height="56"

            className="
              w-11
              h-11

              sm:w-12
              sm:h-12

              md:w-14
              md:h-14

              rounded-full

              border
              border-white/30

              object-cover

              flex-shrink-0

              shadow-md
            "
          />


          <span
            className="
              hidden
              sm:block

              font-semibold

              text-lg
              md:text-xl

              leading-none

              whitespace-nowrap

              text-[#f5eadc]
            "
          >
            صنایع چوب رضائی
          </span>

        </Link>


        {/* ==========================================
            MOBILE NAVIGATION
        ========================================== */}

        <div
          dir="rtl"
          className="
            flex
            md:hidden

            items-center

            gap-5

            text-sm
          "
        >

          {/* HOME */}

          <NavLink
            to="/"
            className={navLinkClass}
          >
            خانه
          </NavLink>


          {/* PORTFOLIO */}

          <NavLink
            to="/portfolio"
            className={navLinkClass}
          >
            گالری
          </NavLink>


          {/* ORDER */}

          <button
            type="button"
            onClick={() => goToHomeSection("order")}
            className="
              text-[#f5eadc]/80
              hover:text-white

              transition-all
              duration-200

              bg-transparent
              border-0

              cursor-pointer

              p-0

              font-inherit
            "
          >
            سفارش
          </button>

        </div>

      </nav>

    </header>
  );
}
