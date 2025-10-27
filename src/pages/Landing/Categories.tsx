import { useEffect, useRef, useState } from "react";
import Heading from "../../components/ui/Heading";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Airplay,
  ArrowLeft,
  ArrowRight,
  Camera,
  Gamepad,
  Headphones,
  ScreenShare,
  Smartphone,
  Speaker,
  Tv,
  WatchIcon,
} from "lucide-react";

const Categories = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const categories = [
    {
      title: "Phones",
      link: "",
      icon: <Smartphone size={56} strokeWidth={0.8} />,
    },
    {
      title: "Computers",
      link: "",
      icon: <ScreenShare size={56} strokeWidth={0.8} />,
    },
    {
      title: "SmartWatch",
      link: "",
      icon: <WatchIcon size={56} strokeWidth={0.8} />,
    },
    {
      title: "Camera",
      link: "",
      icon: <Camera size={56} strokeWidth={0.8} />,
    },
    {
      title: "HeadPhones",
      link: "",
      icon: <Headphones size={56} strokeWidth={0.8} />,
    },
    {
      title: "Gaming",
      link: "",
      icon: <Gamepad size={56} strokeWidth={0.8} />,
    },
    {
      title: "TV",
      link: "",
      icon: <Tv size={56} strokeWidth={0.8} />,
    },
    {
      title: "Speakers",
      link: "",
      icon: <Speaker size={56} strokeWidth={0.8} />,
    },
    {
      title: "Drone",
      link: "",
      icon: <Airplay size={56} strokeWidth={0.8} />,
    },
  ];

  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % categories.length);
    }, 2000);

    // Cleanup on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="max-container pb-16">
        <div className="flex items-center justify-between">
          <div className="flex items-end gap-16">
            <Heading label="Categories" title="Browse By Category" />
          </div>
          <div className="flex gap-2">
            <div
              ref={prevRef}
              className="bg-[#F5F5F5] hover:bg-gray-300 transition p-3 rounded-full cursor-pointer"
            >
              <ArrowLeft />
            </div>
            <div
              ref={nextRef}
              className="bg-[#F5F5F5] hover:bg-gray-300 transition p-3 rounded-full cursor-pointer"
            >
              <ArrowRight />
            </div>
          </div>
        </div>
        <div className="mt-14 gap-5 w-full">
          <Swiper
            modules={[Navigation]}
            className="w-full overflow-hidden"
            spaceBetween={30}
            slidesPerView={4.5}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              const nav = swiper.params.navigation as any;
              nav.prevEl = prevRef.current;
              nav.nextEl = nextRef.current;
            }}
            breakpoints={{
              1280: { slidesPerView: 7 },
              1024: { slidesPerView: 4 },
              768: { slidesPerView: 3 },
              0: { slidesPerView: 1 },
            }}
          >
            {categories.map((category, i) => {
              return (
                <SwiperSlide key={i}>
                  <div
                    className={`${
                      active === i
                        ? "bg-primary border-primary text-white"
                        : "border-black/30"
                    } border p-4 py-8 flex flex-col gap-5 items-center rounded-sm`}
                  >
                    {category?.icon}
                    {category?.title}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="w-full h-[1px] bg-gray-300 md:mt-15 mt-10"></div>
      </div>
    </>
  );
};

export default Categories;
