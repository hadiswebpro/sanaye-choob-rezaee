import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function PortfolioPage() {

  const [filter, setFilter] = useState("all");


  const phone = "989123360775";


  const images = import.meta.glob(
    "../assets/images/**/*.{webp,jpg,png}",
    {
      eager: true,
      import: "default",
    }
  );



  const getImages = (folder, count) => {

    const result = [];

    for (let i = 1; i <= count; i++) {

      const number = String(i).padStart(2, "0");


      const image = Object.entries(images).find(([path]) =>
        path.includes(`${folder}/${folder}-${number}`)
      );


      if (image) {
        result.push(image[1]);
      }

    }

    return result;

  };




  const categories = [

    {
      title: "سرویس خواب چوبی",
      cat: "bed",
      folder: "bedroom-set",
      count: 8,
    },


    {
      title: "کمد دیواری",
      cat: "closet",
      folder: "wardrobe",
      count: 4,
    },


    {
      title: "کتابخانه چوبی",
      cat: "book",
      folder: "bookshelf",
      count: 4,
    },


    {
      title: "میز چوبی",
      cat: "desk",
      folder: "desk",
      count: 4,
    },


    {
      title: "دراور سفارشی",
      cat: "drawer",
      folder: "drawer",
      count: 2,
    },


    {
      title: "جاکفشی چوبی",
      cat: "shoe",
      folder: "shoe-cabinet",
      count: 3,
    },


    {
      title: "میز تلویزیون",
      cat: "tv",
      folder: "tv-stand",
      count: 4,
    },


    {
      title: "شلف دکوراتیو",
      cat: "shelf",
      folder: "shelf",
      count: 2,
    },

  ];



  const projects = categories.map(item => ({
    ...item,
    images: getImages(item.folder, item.count)
  }));



  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(item => item.cat === filter);




  const sendMessage = (title) => {

    const msg =
`سلام 👋
برای سفارش ${title} مشاوره می‌خواستم.`;


    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );

  };
    const FilterButton = ({ value, label }) => (

    <button

      onClick={() => setFilter(value)}

      className={`
        px-5
        py-2

        rounded-full

        border

        transition-all
        duration-300


        ${
          filter === value

          ? 
          "bg-[#2b1d14] text-white border-[#2b1d14]"

          :

          "text-[#2b1d14] border-[#2b1d14] hover:bg-[#2b1d14] hover:text-white"

        }

      `}

    >

      {label}

    </button>

  );



  return (

    <>


      <Helmet>

        <title>
          نمونه کارهای صنایع چوب رضائی | گالری پروژه های چوبی
        </title>


        <meta

          name="description"

          content="
          مشاهده گالری کامل پروژه های صنایع چوب رضائی شامل
          سرویس خواب، کمد، کتابخانه، میز، جاکفشی و مصنوعات
          چوبی سفارشی.
          "

        />


      </Helmet>





      <section

        dir="rtl"

        className="
          bg-[#faf7f3]

          min-h-screen
          
          pt-40
          pb-24

          px-5

          sm:px-8

        "

      >



        <div className="max-w-7xl mx-auto">





          {/* HEADER */}


          <header className="text-center mb-14">


            <span

              className="
                text-[#8b6b55]

                tracking-[0.3em]

                text-xs

                font-semibold
              "

            >

              PORTFOLIO

            </span>



            <h1

              className="
                mt-4

                text-4xl

                sm:text-5xl

                font-bold

                text-[#2b1d14]

              "

            >
               
              نمونه کارهای اجرا شده

            </h1>



            <p

              className="
                mt-5

                max-w-3xl

                mx-auto

                leading-8

                text-[#6b5b52]

              "

            >

              مشاهده تصاویر واقعی پروژه‌های ساخته شده در صنایع چوب رضائی
              با بیش از ۳۰ سال تجربه در طراحی و ساخت مصنوعات چوبی.

            </p>


          </header>







          {/* FILTER */}


          <div

            className="
              flex

              flex-wrap

              justify-center

              gap-3

              mb-16

            "

          >


            <FilterButton value="all" label="همه"/>


            <FilterButton value="bed" label="سرویس خواب"/>


            <FilterButton value="closet" label="کمد"/>


            <FilterButton value="book" label="کتابخانه"/>


            <FilterButton value="desk" label="میز"/>


            <FilterButton value="drawer" label="دراور"/>


            <FilterButton value="shoe" label="جاکفشی"/>


            <FilterButton value="tv" label="میز تلویزیون"/>


            <FilterButton value="shelf" label="شلف"/>


          </div>








          {/* GALLERY */}



          <div className="space-y-20">


            {
              filteredProjects.map((project,index)=>(



                <section

                  key={project.cat}

                  className="

                    bg-white

                    rounded-3xl

                    p-5

                    sm:p-8

                    shadow-md

                  "

                >





                  {/* CATEGORY TITLE */}


                  <div

                    className="
                      flex

                      flex-col

                      sm:flex-row

                      justify-between

                      items-center

                      mb-8

                      gap-3

                    "

                  >



                    <h2

                      className="
                        text-2xl

                        sm:text-3xl

                        font-bold

                        text-[#2b1d14]

                      "

                    >

                      {project.title}

                    </h2>



                    <span

                      className="
                        text-[#8b6b55]

                        text-sm

                      "

                    >

                      {project.images.length} تصویر

                    </span>



                  </div>







                  {/* IMAGES */}


                  <div

                    className="
                      grid

                      grid-cols-1

                      sm:grid-cols-2

                      lg:grid-cols-4

                      gap-5

                    "

                  >


                    {
                      project.images.map((image,i)=>(


                        <img

                          key={i}

                          src={image}

                          alt={`${project.title} - تصویر ${i+1}`}

                          loading="lazy"

                          decoding="async"

                          className="
                            w-full

                            h-64

                            object-cover

                            rounded-2xl

                            hover:scale-105

                            transition-transform

                            duration-500

                          "

                        />


                      ))
                    }


                  </div>
                                    {/* ORDER BUTTON */}


                  <div

                    className="
                      mt-8

                      flex

                      justify-center

                    "

                  >


                    <button

                      onClick={() => sendMessage(project.title)}

                      className="
                        bg-[#2b1d14]

                        text-white

                        px-8

                        py-3

                        rounded-xl

                        font-medium

                        hover:bg-[#3d2b1f]

                        hover:-translate-y-1

                        transition-all

                        duration-300

                        shadow-md

                      "

                    >

                      سفارش این مدل

                    </button>


                  </div>



                </section>


              ))

            }


          </div>





          {/* TRUST SECTION */}


          <div

            className="
              mt-20

              text-center

              bg-[#2b1d14]

              text-white

              rounded-3xl

              p-8

              sm:p-12

            "

          >


            <h3

              className="
                text-2xl

                sm:text-3xl

                font-bold

              "

            >

              طراحی اختصاصی مطابق فضای شما

            </h3>



            <p

              className="
                mt-4

                max-w-3xl

                mx-auto

                leading-8

                text-white/80

              "

            >

              هر پروژه در صنایع چوب رضائی با توجه به ابعاد،
              نیاز مشتری و سبک دکوراسیون طراحی و اجرا می‌شود.
              برای دریافت مشاوره و استعلام قیمت با ما در ارتباط باشید.

            </p>



            <button

              onClick={() => sendMessage("مشاوره طراحی چوبی")}

              className="
                mt-7

                bg-white

                text-[#2b1d14]

                px-8

                py-3

                rounded-xl

                font-medium

                hover:scale-105

                transition

              "

            >

              دریافت مشاوره

            </button>


          </div>



        </div>


      </section>


    </>

  );

}