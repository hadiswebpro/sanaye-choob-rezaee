import logo from "../assets/icons/logo.jpeg";
import whatsappIcon from "../assets/icons/whatsapp.svg";
import eitaaIcon from "../assets/icons/eitaa.svg";
import baleIcon from "../assets/icons/bale.svg";

export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="bg-gradient-to-b from-[#241810] to-[#1b130d] text-white border-t border-[#6d4c3d]/40"
    >
      {/* Top line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#b08b6d] to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-14 lg:py-16">

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">

          {/* BRAND */}
          <div className="sm:col-span-2 lg:col-span-1">

            <h4 className="font-semibold text-lg mb-6 text-[#f0dfce]">
              صنایع چوب رضایی
            </h4>

            <div className="flex items-start gap-4">

              {/* Logo */}
              <div className="w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-full border border-[#b08b6d]/40 shadow-lg shadow-black/30 overflow-hidden flex-shrink-0">
                <img
                  src={logo}
                  alt="صنایع چوب رضایی"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Brand text */}
              <div className="min-w-0">
                <h3 className="font-bold text-xl leading-8">
                  کارگاه مرتضی رضایی
                </h3>

                <p className="text-[#d7c5b5] text-sm leading-7 mt-1 max-w-sm">
                  طراحی و ساخت انواع سرویس خواب، کمد، کتابخانه و
                  مصنوعات چوبی سفارشی
                </p>
              </div>

            </div>
          </div>

          {/* CONTACT */}
          <div>

            <h4 className="font-semibold text-lg mb-6 text-[#f0dfce]">
              ارتباط با ما
            </h4>

            <div className="space-y-4">

              {/* Phone */}
              <div>
                <span className="block text-[#a8907b] text-sm mb-1">
                  شماره تماس
                </span>

                <a
                  href="tel:09123360752"
                  className="inline-block text-[#d7c5b5] text-base hover:text-white transition"
                  dir="ltr"
                >
                  0912 336 0752
                </a>
              </div>

              {/* Working hours */}
              <div>
                <span className="block text-[#a8907b] text-sm mb-1">
                  ساعات کاری
                </span>

                <p className="text-[#d7c5b5] text-sm leading-7">
                  ۹ صبح تا ۸ شب
                </p>
              </div>

              {/* Consultation */}
              <div>
                <span className="block text-[#a8907b] text-sm mb-1">
                  مشاوره و پاسخگویی
                </span>

                <p className="text-[#d7c5b5] text-sm leading-7">
                  تا ساعت ۱۰ شب
                </p>
              </div>

              {/* Address */}
              <div>
                <span className="block text-[#a8907b] text-sm mb-1">
                  آدرس کارگاه
                </span>

                <p className="text-[#d7c5b5] text-sm leading-7">
                  تهران، اتوبان آزادگان،
                  <br />
                  خیابان شمس‌آباد
                  <br />
                  <span className="text-[#f0dfce]">
                    (برای دریافت آدرس دقیق تماس بگیرید)
                  </span>
                </p>
              </div>

            </div>
          </div>

          {/* SOCIALS */}
          <div>

            <h4 className="font-semibold text-lg mb-6 text-[#f0dfce]">
              شبکه‌های اجتماعی
            </h4>

            <p className="text-[#d7c5b5] text-sm leading-7 max-w-sm mb-6">
              برای مشاهده نمونه‌کارها و ارتباط با کارگاه،
              از طریق شبکه‌های اجتماعی با ما در ارتباط باشید.
            </p>

            <div className="flex items-center gap-4">

              {/* WhatsApp */}
              <a
                href="https://wa.me/989123360752"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white hover:scale-110 transition duration-300"
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
                rel="noreferrer"
                aria-label="Eitaa"
                className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white hover:scale-110 transition duration-300"
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
                rel="noreferrer"
                aria-label="Bale"
                className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white hover:scale-110 transition duration-300"
              >
                <img
                  src={baleIcon}
                  alt=""
                  className="w-5 h-5"
                />
              </a>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-12 sm:mt-14 lg:mt-16 pt-6 border-t border-[#5c4030]/40">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-right">

            <p className="text-[#a8907b] text-xs sm:text-sm leading-6">
              صنایع چوب رضایی | کارگاه ساخت کمد دیواری و سرویس خواب سفارشی در ایران
            </p>

            <p className="text-[#a8907b] text-xs sm:text-sm whitespace-nowrap">
              © {new Date().getFullYear()} صنایع چوب رضایی
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}
