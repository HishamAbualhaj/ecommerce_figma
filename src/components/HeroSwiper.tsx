import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper.css";
import type { ReactNode } from "react";
interface HeroSwiperProps {
  children: ReactNode;
}
const HeroSwiper = ({ children }: HeroSwiperProps) => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={1} // 👈 makes last slide half visible
      centeredSlides={false}
      pagination={{ clickable: true }}
      grabCursor={true}
      className="w-full overflow-hidden"
    >
      {children}
    </Swiper>
  );
};

export default HeroSwiper;
