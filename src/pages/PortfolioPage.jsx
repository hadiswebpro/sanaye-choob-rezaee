import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showContact, setShowContact] = useState(false);

  const phone = "989123360752";

  const items = [
    { title: "سرویس خواب چوبی", img: "src/assets/images/bed.webp", cat: "bed" },
    { title: "کمد دیواری", img: "src/assets/images/wardrobe.webp", cat: "closet" },
    { title: "کتابخانه کلاسیک", img: "src/assets/images/bookshelf.webp", cat: "book" },
    { title: "میز کامپیوتر", img: "src/assets/images/desk.webp", cat: "desk" },
    { title: "دراور سفارشی", img: "src/assets/images/drawer.webp", cat: "drawer" },
  ];

  const filtered =
    filter === "all" ? items : items.filter((i) => i.cat === filter);

  const sendMessage = (platform) => {
    if (!selectedItem) return;

    const msg = `سلام 👋
برای سفارش "${selectedItem.title}" مشاوره می‌خواستم.`;

    let url = "";

    if (platform === "whatsapp") {
      url = `https://wa.me/${989123360752}?text=${encodeURIComponent(msg)}`;
    }

    if (platform === "eitaa") {
      url = `https://eitaa.com/yourid`;
    }

    if (platform === "bale") {
      url = `https://ble.ir/yourid`;
    }

    window.open(url, "_blank");
  };

  const FilterButton = ({ value, label }) => (
    <button
      onClick={() => setFilter(value)}
      className={`
        px-5 py-2 rounded-full border transition-all duration-300
        ${
          filter === value
            ? "bg-[#2b1d14] text-white border-[#2b1d14]"
            : "text-[#2b1d14] border-[#2b1d14] hover:bg-[#2b1d14] hover:text-white"
        }
      `}
    >
      {label}
    </button>
  );

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>نمونه کارهای صنایع چوب رضائی | کمد و سرویس خواب و دراور و میز و کتابخانه سفارشی</title>
        <meta
          name="description"
          content="مشاهده نمونه کارهای واقعی شامل کمد و دراور، سرویس خواب، انواع میز و کتابخانه سفارشی ساخته شده در کارگاه صنایع چوب رضائی با ۳۰ سال تجربه."
        />
      </Helmet>

      <section className="bg-[#f6f1ea] min-h-screen py-24 px-6" dir="rtl">

        {/* TITLE */}
        <div className="text-center mb-10"><br></br><br></br>
          <h1 className="text-5xl font-bold text-[#2b1d14]">
            نمونه کارها
          </h1>
        </div>

        {/* FILTER */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">

          <FilterButton value="all" label="همه" />
          <FilterButton value="bed" label="سرویس خواب" />
          <FilterButton value="closet" label="کمد" />
          <FilterButton value="book" label="کتابخانه" />
          <FilterButton value="desk" label="میز" />

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {filtered.map((item, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-3xl shadow-lg"
            >

              <img
                src={item.img}
                alt={item.title}
                className="h-[380px] w-full object-cover group-hover:scale-110 transition"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />

              <div className="absolute bottom-0 p-5 text-white w-full">

                <h3 className="text-lg font-bold">{item.title}</h3>

                <button
                  onClick={() => {
                    setSelectedItem(item);
                    setShowContact(true);
                  }}
                  className="mt-3 bg-white text-black px-4 py-2 rounded-lg text-sm hover:scale-105 transition"
                >
                  سفارش این کار
                </button>

              </div>

            </div>
          ))}

        </div>

        {/* MODAL */}
        {showContact && selectedItem && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

            <div className="bg-white p-6 rounded-2xl w-[320px] text-center">

              <h2 className="text-lg font-bold mb-4">
                انتخاب روش ارتباط
              </h2>

              <p className="mb-4 text-sm text-gray-600">
                {selectedItem.title}
              </p>

              <div className="flex flex-col gap-3">

                <button
                  onClick={() => sendMessage("whatsapp")}
                  className="bg-green-500 text-white py-2 rounded-lg"
                >
                  واتساپ
                </button>

                <button
                  onClick={() => sendMessage("eitaa")}
                  className="bg-orange-500 text-white py-2 rounded-lg"
                >
                  ایتا
                </button>

                <button
                  onClick={() => sendMessage("bale")}
                  className="bg-blue-500 text-white py-2 rounded-lg"
                >
                  بله
                </button>

                <button
                  onClick={() => setShowContact(false)}
                  className="mt-2 text-sm text-gray-500"
                >
                  بستن
                </button>

              </div>

            </div>

          </div>
        )}

      </section>
    </>
  );
}