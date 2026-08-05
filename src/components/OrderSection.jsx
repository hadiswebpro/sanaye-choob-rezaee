export default function OrderSection() {
  return (
    <section
      id="order"
      dir="rtl"
      className="
        py-24
        sm:py-28
        lg:py-32
        text-white
        bg-gradient-to-b
        from-[#1f140d]
        via-[#2b1d14]
        to-[#120d08]
      "
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-6 text-center">

        {/* LABEL */}
        <span className="text-[#d7c5b5] tracking-[0.25em] text-xs sm:text-sm">
          CONTACT
        </span>


        {/* TITLE */}
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-4 text-[#f8f3ee] leading-tight">
          ثبت سفارش و دریافت مشاوره
        </h2>


        {/* DESCRIPTION */}
        <p className="text-[#d7c5b5] mt-6 max-w-2xl mx-auto leading-8 text-sm sm:text-base">
          برای دریافت مشاوره، استعلام قیمت، ثبت سفارش یا هماهنگی جهت
          بازدید، از طریق واتساپ، بله، ایتا یا تماس مستقیم با ما در
          ارتباط باشید.
        </p>


        {/* ORDER STEPS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12 sm:mt-14">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="text-3xl mb-3">1️⃣</div>

            <h3 className="font-semibold">
              مشاوره
            </h3>

            <p className="text-sm text-[#d7c5b5] mt-2 leading-6">
              ارتباط اولیه و بررسی نیاز شما
            </p>
          </div>


          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="text-3xl mb-3">2️⃣</div>

            <h3 className="font-semibold">
              بررسی پروژه
            </h3>

            <p className="text-sm text-[#d7c5b5] mt-2 leading-6">
              تعیین ابعاد، مدل و متریال
            </p>
          </div>


          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="text-3xl mb-3">3️⃣</div>

            <h3 className="font-semibold">
              اعلام قیمت
            </h3>

            <p className="text-sm text-[#d7c5b5] mt-2 leading-6">
              ارائه قیمت و زمان ساخت
            </p>
          </div>


          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="text-3xl mb-3">4️⃣</div>

            <h3 className="font-semibold">
              ساخت و تحویل
            </h3>

            <p className="text-sm text-[#d7c5b5] mt-2 leading-6">
              اجرای سفارش و تحویل نهایی
            </p>
          </div>

        </div>


        {/* ADVANTAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 sm:mt-12 text-right">

          <div className="bg-white/5 rounded-xl p-4 text-sm sm:text-base">
            ✓ مشاوره رایگان قبل از ثبت سفارش
          </div>

          <div className="bg-white/5 rounded-xl p-4 text-sm sm:text-base">
            ✓ طراحی کاملاً سفارشی
          </div>

          <div className="bg-white/5 rounded-xl p-4 text-sm sm:text-base">
            ✓ ارتباط مستقیم با تولید کننده
          </div>

          <div className="bg-white/5 rounded-xl p-4 text-sm sm:text-base">
            ✓ پشتیبانی و پاسخگویی پس از تحویل
          </div>

        </div>


        {/* PHONE */}
        <div className="mt-12">

          <p className="text-[#d7c5b5] text-sm sm:text-base">
            تماس مستقیم جهت مشاوره و ثبت سفارش
          </p>


          {/* First phone */}
          <a
            href="tel:09123360752"
            dir="ltr"
            className="
              block
              text-2xl
              sm:text-3xl
              font-bold
              mt-3
              text-white
              hover:text-[#e8d2bc]
              transition
            "
          >
            0912 336 0752
          </a>


          {/* Second phone */}
          <a
            href="tel:09213260752"
            dir="ltr"
            className="
              block
              text-2xl
              sm:text-3xl
              font-bold
              mt-3
              text-white
              hover:text-[#e8d2bc]
              transition
            "
          >
            0921 326 0752
          </a>

        </div>


        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">

          {/* WhatsApp */}
          <a
            href="https://wa.me/989123360752"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-[#e8d2bc]
              text-[#2a1c14]
              px-7
              sm:px-8
              py-3
              rounded-xl
              font-medium
              text-sm
              sm:text-base
              hover:bg-[#f0dfce]
              hover:scale-105
              transition-all
              duration-300
            "
          >
            دریافت مشاوره رایگان
          </a>


          {/* Portfolio */}
          <a
            href="/#portfolio"
            className="
              px-7
              sm:px-8
              py-3
              rounded-xl
              border
              border-[#e8d2bc]/30
              bg-white/5
              backdrop-blur-xl
              text-sm
              sm:text-base
              hover:bg-[#e8d2bc]
              hover:text-[#2a1c14]
              hover:scale-105
              transition-all
              duration-300
            "
          >
            مشاهده نمونه کارها
          </a>

        </div>

      </div>
    </section>
  );
}

