import bed from "../assets/images/bed.webp";
import wardrobe from "../assets/images/wardrobe.webp";
import bookshelf from "../assets/images/bookshelf.webp";
import desk from "../assets/images/desk.webp";
import drawer from "../assets/images/drawer.webp";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const items = [
    {
      title: "سرویس خواب چوبی",
      img: bed,
    },
    {
      title: "کمد دیواری",
      img: wardrobe,
    },
    {
      title: "کتابخانه کلاسیک",
      img: bookshelf,
    },
    {
      title: "میز کامپیوتر",
      img: desk,
    },
    {
      title: "دراور سفارشی",
      img: drawer,
    },
  ];

  return (
    <section
      dir="rtl"
      id="portfolio"
      className="
        bg-[#f6f1ea]
        py-20
        sm:py-24
        px-5
        sm:px-8
        md:px-16
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}

        <header className="text-center mb-14 sm:mb-16">

          <span
            className="
              text-[#8b6b55]
              tracking-[0.3em]
              text-xs
              sm:text-sm
              font-semibold
            "
          >
            PORTFOLIO
          </span>

          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              text-[#2b1d14]
              mt-4
            "
          >
            نمونه کارها
          </h2>

          <p
            className="
              text-[#6b5b52]
              mt-5
              text-sm
              sm:text-base
            "
          >
            ساخته شده با بیش از ۳۰ سال تجربه در صنایع چوب رضائی
          </p>

        </header>


        {/* GRID */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
            lg:gap-8
          "
        >

          {items.map((item, index) => (
            <article
              key={item.title}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                bg-[#e8ddd2]
                shadow-md
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-xl
              "
            >

              {/* IMAGE */}

              <img
                src={item.img}
                alt={item.title}
                width="800"
                height="600"
                loading={index < 2 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={index === 0 ? "high" : "auto"}
                className="
                  block
                  w-full
                  h-[320px]
                  sm:h-[360px]
                  lg:h-[400px]
                  object-cover

                  transition-transform
                  duration-700
                  ease-out

                  group-hover:scale-[1.04]
                "
              />


              {/* OVERLAY */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/65
                  via-black/10
                  to-transparent

                  opacity-80
                  group-hover:opacity-100

                  transition-opacity
                  duration-500
                "
              />


              {/* TEXT */}

              <div
                className="
                  absolute
                  right-0
                  bottom-0
                  left-0
                  p-6
                  sm:p-7
                "
              >

                <div
                  aria-hidden="true"
                  className="
                    w-10
                    h-px
                    bg-[#d8c1aa]
                    mb-3
                    transition-all
                    duration-500
                    group-hover:w-16
                  "
                />

                <h3
                  className="
                    text-xl
                    sm:text-2xl
                    font-bold
                    text-white
                  "
                >
                  {item.title}
                </h3>

              </div>

            </article>
          ))}

        </div>


        {/* CTA */}

        <div
          className="
            flex
            flex-col
            sm:flex-row
            justify-center
            items-center
            gap-4
            mt-14
            sm:mt-16
          "
        >

          <Link
            to="/portfolio"
            className="
              w-full
              sm:w-auto
              text-center

              bg-[#2b1d14]
              text-white

              px-8
              py-4

              rounded-xl

              font-medium

              hover:bg-[#3d2b1f]
              hover:-translate-y-1

              transition-all
              duration-300

              shadow-md
              hover:shadow-lg
            "
          >
            مشاهده نمونه کارها
          </Link>


          <a
            href="#order"
            className="
              w-full
              sm:w-auto
              text-center

              border
              border-[#2b1d14]

              text-[#2b1d14]

              px-8
              py-4

              rounded-xl

              font-medium

              hover:bg-[#2b1d14]
              hover:text-white
              hover:-translate-y-1

              transition-all
              duration-300
            "
          >
            دریافت مشاوره رایگان
          </a>

        </div>


        {/* TRUST TEXT */}

        <p
          className="
            text-center
            text-[#6b5b52]
            mt-8
            max-w-2xl
            mx-auto
            leading-8
            text-sm
            sm:text-base
          "
        >
          هر پروژه با توجه به نیاز مشتری، فضای موجود و سلیقه شخصی طراحی و ساخته
          می‌شود. برای دریافت مشاوره، استعلام قیمت و ثبت سفارش می‌توانید با ما
          در ارتباط باشید
        </p>

      </div>
    </section>
  );
}

