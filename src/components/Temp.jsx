export default function OrderSteps() {
  const steps = [
    {
      number: "01",
      title: "مشاوره اولیه",
      desc: "از طریق واتساپ، بله، ایتا یا تماس مستقیم با صنایع چوب رضائی در ارتباط باشید.",
    },
    {
      number: "02",
      title: "بررسی نیاز شما",
      desc: "ابعاد، مدل، رنگ، متریال و جزئیات موردنظر شما بررسی و مشخص می‌شود.",
    },
    {
      number: "03",
      title: "اعلام قیمت",
      desc: "پس از بررسی پروژه، قیمت و زمان تقریبی ساخت سفارش به شما اعلام می‌شود.",
    },
    {
      number: "04",
      title: "ساخت و تحویل",
      desc: "سفارش شما در کارگاه ساخته شده و در زمان توافق‌شده تحویل خواهد شد.",
    },
  ];

  return (
    <section
      dir="rtl"
      aria-labelledby="order-process-title"
      className="
        bg-[#f5efe7]
        py-20
        sm:py-24
        px-5
        sm:px-6
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <header className="text-center mb-14 sm:mb-18">

          <span
            className="
              text-[#8b6b55]
              tracking-[0.3em]
              text-xs
              font-semibold
            "
          >
            OUR PROCESS
          </span>

          <h2
            id="order-process-title"
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-bold
              mt-4
              text-[#2b1d14]
            "
          >
            مراحل ثبت سفارش
          </h2>

          <p
            className="
              text-[#6b5b52]
              mt-4
              max-w-2xl
              mx-auto
              leading-8
              text-sm
              sm:text-base
            "
          >
            از اولین مشاوره تا ساخت و تحویل نهایی،
            در تمام مراحل سفارش در کنار شما هستیم.
          </p>

        </header>


        {/* STEPS */}
        <ol
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4

            gap-6

            list-none
            p-0
            m-0

            lg:[direction:rtl]
          "
        >

          {steps.map((step, index) => (
            <li
              key={step.number}
              className="
                group
                relative
                text-right
              "
            >

              {/* CONNECTING LINE */}

              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="
                    hidden
                    lg:block
                    absolute
                    top-8
                    -left-3
                    w-6
                    h-px
                    bg-[#cdb7a3]
                  "
                />
              )}


              {/* CARD */}

              <div
                className="
                  relative
                  h-full

                  bg-[#fffdf9]

                  border
                  border-[#e3d6c9]

                  p-7
                  sm:p-8

                  transition-all
                  duration-500

                  hover:-translate-y-2
                  hover:border-[#a98b72]
                  hover:shadow-[0_18px_45px_rgba(61,42,28,0.12)]
                "
              >

                {/* TOP LINE */}

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    top-0
                    right-0
                    h-px
                    w-12
                    bg-[#8b6b55]

                    transition-all
                    duration-500

                    group-hover:w-20
                  "
                />


                {/* NUMBER */}

                <div
                  aria-hidden="true"
                  className="
                    text-5xl
                    sm:text-6xl
                    font-serif
                    font-bold
                    leading-none
                    text-[#d8c4b0]

                    transition-colors
                    duration-500

                    group-hover:text-[#b89a80]
                  "
                >
                  {step.number}
                </div>


                {/* TITLE */}

                <h3
                  className="
                    text-lg
                    sm:text-xl
                    font-bold

                    mt-7

                    text-[#2b1d14]

                    transition-colors
                    duration-300

                    group-hover:text-[#76543f]
                  "
                >
                  {step.title}
                </h3>


                {/* DESCRIPTION */}

                <p
                  className="
                    mt-4

                    text-[#6b5b52]

                    leading-8

                    text-sm
                    sm:text-base
                  "
                >
                  {step.desc}
                </p>


                {/* BOTTOM DETAIL */}

                <span
                  aria-hidden="true"
                  className="
                    block
                    mt-7

                    w-8
                    h-px

                    bg-[#cdb7a3]

                    transition-all
                    duration-500

                    group-hover:w-14
                  "
                />

              </div>

            </li>
          ))}

        </ol>

      </div>
    </section>
  );
}
