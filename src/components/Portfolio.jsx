import { Link } from "react-router-dom";

// Images
import bedroomSet from "../assets/images/bedroom-set/bedroom-set-01.webp";
import wardrobe from "../assets/images/wardrobe/wardrobe-01.webp";
import bookshelf from "../assets/images/bookshelf/bookshelf-01.webp";
import desk from "../assets/images/desk/desk-01.webp";
import drawer from "../assets/images/drawer/drawer-01.webp";
import shoeCabinet from "../assets/images/shoe-cabinet/shoe-cabinet-01.webp";
import tvStand from "../assets/images/tv-stand/tv-stand-01.webp";
import shelf from "../assets/images/shelf/shelf-01.webp";


export default function Portfolio() {

  const items = [
    {
      title: "سرویس خواب چوبی",
      subtitle: "طراحی و ساخت سفارشی اتاق خواب",
      category: "سرویس خواب",
      img: bedroomSet,
    },

    {
      title: "کمد دیواری",
      subtitle: "کمدهای کاربردی متناسب با فضای منزل",
      category: "کمد",
      img: wardrobe,
    },

    {
      title: "کتابخانه چوبی",
      subtitle: "طراحی کلاسیک و مدرن",
      category: "کتابخانه",
      img: bookshelf,
    },

    {
      title: "میز چوبی",
      subtitle: "میز مطالعه، کامپیوتر و اداری",
      category: "میز",
      img: desk,
    },

    {
      title: "دراور سفارشی",
      subtitle: "ساخت مطابق نیاز مشتری",
      category: "دراور",
      img: drawer,
    },

    {
      title: "جاکفشی چوبی",
      subtitle: "هماهنگ با دکوراسیون داخلی",
      category: "جاکفشی",
      img: shoeCabinet,
    },

    {
      title: "میز تلویزیون",
      subtitle: "طراحی مدرن و کلاسیک",
      category: "میز تلویزیون",
      img: tvStand,
    },

    {
      title: "شلف چوبی",
      subtitle: "جزئیات دکوراتیو برای فضای شما",
      category: "شلف",
      img: shelf,
    },
  ];


  return (

    <section
      dir="rtl"
      id="portfolio"
      className="
        bg-[#faf7f3]
        py-20
        sm:py-24
        px-5
        sm:px-8
        md:px-16
      "
    >

      <div className="max-w-7xl mx-auto">


        {/* HEADER */}

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
              text-3xl
              sm:text-5xl
              md:text-6xl
              font-bold
              text-[#2b1d14]
              mt-4
            "
          >
            نمونه کارهای صنایع چوب رضائی
          </h2>


          <p
            className="
              mt-5
              max-w-3xl
              mx-auto
              text-[#6b5b52]
              leading-8
              text-sm
              sm:text-base
            "
          >
            مجموعه‌ای از پروژه‌های اجرا شده شامل سرویس خواب،
            کمد، کتابخانه، میز، جاکفشی، میز تلویزیون و مصنوعات
            چوبی سفارشی که با توجه به نیاز و سلیقه مشتری طراحی
            و ساخته شده‌اند.
          </p>


        </header>   
        
        
        {/* PORTFOLIO GRID */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
            lg:gap-7
          "
        >

          {items.map((item, index) => (

            <article
              key={item.title}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                bg-[#e8ddd2]

                shadow-md
                hover:shadow-2xl

                transition-all
                duration-500

                hover:-translate-y-2
              "
            >

              {/* IMAGE */}

              <img
                src={item.img}
                alt={`${item.title} صنایع چوب رضائی`}
                width="800"
                height="600"
                loading={index < 4 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={
                  index === 0 ? "high" : "auto"
                }
                className="
                  w-full
                  h-[330px]
                  sm:h-[350px]

                  object-cover

                  transition-transform
                  duration-700
                  ease-out

                  group-hover:scale-110
                "
              />


              {/* OVERLAY */}

              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-black/80
                  via-black/20
                  to-transparent

                  opacity-90

                  transition-all
                  duration-500
                "
              />


              {/* CONTENT */}

              <div
                className="
                  absolute
                  bottom-0
                  right-0
                  left-0

                  p-6
                "
              >


                {/* CATEGORY */}

                <span
                  className="
                    text-xs
                    text-[#e8d2bc]

                    font-medium
                  "
                >
                  {item.category}
                </span>


                {/* LINE */}

                <div
                  className="
                    w-10
                    h-[2px]

                    bg-[#e8d2bc]

                    my-3

                    transition-all
                    duration-500

                    group-hover:w-20
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


                <p
                  className="
                    text-white/80

                    text-sm

                    mt-2

                    leading-6
                  "
                >
                  {item.subtitle}
                </p>



                {/* BUTTON */}

                <Link
                  to="/portfolio"
                  className="
                    inline-flex
                    items-center
                    gap-2

                    mt-5

                    text-[#f1dcc5]

                    text-sm
                    font-medium


                    opacity-0
                    translate-y-3


                    group-hover:opacity-100
                    group-hover:translate-y-0


                    transition-all
                    duration-300
                  "
                >
                  مشاهده جزئیات

                  <span>
                    ←
                  </span>

                </Link>


              </div>


            </article>

          ))}


        </div>
                {/* CTA SECTION */}

        <div
          className="
            mt-16
            sm:mt-20

            text-center
          "
        >

          <h3
            className="
              text-2xl
              sm:text-3xl

              font-bold

              text-[#2b1d14]
            "
          >
            پروژه‌های بیشتری مشاهده کنید
          </h3>


          <p
            className="
              mt-4

              max-w-2xl
              mx-auto

              text-[#6b5b52]

              leading-8

              text-sm
              sm:text-base
            "
          >
            برای مشاهده تمام نمونه‌کارهای اجرا شده،
            جزئیات پروژه‌ها و ایده‌های مختلف طراحی،
            وارد صفحه کامل نمونه‌کارهای صنایع چوب رضائی شوید.
          </p>


          <Link
            to="/portfolio"
            className="
              inline-flex

              mt-8

              bg-[#2b1d14]

              text-white

              px-8
              sm:px-10

              py-3
              sm:py-4

              rounded-xl

              font-medium


              hover:bg-[#3d2b1f]

              hover:-translate-y-1


              transition-all

              duration-300

              shadow-md

              hover:shadow-xl
            "
          >
            مشاهده همه نمونه‌کارها
          </Link>


        </div>



        {/* TRUST BOX */}

        <div
          className="
            mt-16

            bg-white

            rounded-3xl

            shadow-md

            p-6
            sm:p-10

            text-center
          "
        >

          <h3
            className="
              text-xl
              sm:text-2xl

              font-bold

              text-[#2b1d14]
            "
          >
            چرا صنایع چوب رضائی؟
          </h3>


          <p
            className="
              mt-5

              max-w-4xl

              mx-auto

              text-[#6b5b52]

              leading-8

              text-sm
              sm:text-base
            "
          >
            صنایع چوب رضائی با بیش از ۳۰ سال تجربه در طراحی و
            ساخت مصنوعات چوبی، پروژه‌های سفارشی را با توجه به
            فضای موجود، نیاز مشتری و سبک دکوراسیون اجرا می‌کند.
            کیفیت ساخت، طراحی اختصاصی و مشاوره قبل از سفارش،
            از ویژگی‌های اصلی مجموعه ماست.
          </p>


        </div>


      </div>

    </section>

  );

}