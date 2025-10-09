import CountDownTimer from "../components/ui/CountDownTimer";
import Heading from "../components/ui/Heading";
import product_1 from "../assets/product_1.png";
import product_2 from "../assets/product_2.png";
import product_3 from "../assets/product_3.png";
import ProductCard from "../components/ui/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper.css";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "../components/ui/Button";
const FlashSales = () => {
  const products = [
    {
      title: "HAVIT HV-G92 Gamepad",
      price: 160,
      discount: 40,
      stars: 5,
      reviews: 88,
      image: product_1,
      isFavorite: false,
      badget: "Discount",
    },
    {
      title: "AK-900 Wired Keyboard",
      price: 1160,
      discount: 35,
      stars: 4,
      reviews: 75,
      image: product_2,
      isFavorite: false,
      badget: "Discount",
    },
    {
      title: "IPS LCD Gaming Monitor",
      price: 400,
      discount: 30,
      stars: 5,
      reviews: 99,
      image: product_3,
      isFavorite: false,
      badget: "Discount",
    },
    {
      title: "HAVIT HV-G92 Gamepad",
      price: 160,
      discount: 40,
      stars: 5,
      reviews: 88,
      image: product_1,
      isFavorite: false,
      badget: "Discount",
    },
    {
      title: "IPS LCD Gaming Monitor",
      price: 400,
      discount: 30,
      stars: 5,
      reviews: 99,
      image: product_3,
      isFavorite: false,
      badget: "Discount",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="py-28">
      <div className="max-container">
        <div className="flex items-center justify-between">
          <div className="flex items-end gap-16">
            <Heading label="Today's" title="Flash Sales" />
            <div className="max-lg:hidden">
              <CountDownTimer targetDate="2025-10-15T00:00:00" />
            </div>
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
        <div className="lg:hidden mt-5">
          <CountDownTimer targetDate="2025-10-15T00:00:00" />
        </div>
      </div>
      <div className="mt-10 gap-5 max-w-[1760px] ml-auto md:pl-5 px-3">
        <Swiper
          modules={[Navigation]}
          className="w-full overflow-hidden"
          spaceBetween={20}
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
            1280: { slidesPerView: 4.5 },
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {products.map((product, i) => (
            <SwiperSlide key={i}>
              <ProductCard
                {...product}
                badget={
                  product.badget as "New" | "Hot" | "Discount" | undefined
                }
              >
                <ProductCard.ProductImage />
                <div className="flex flex-col gap-2 mt-5">
                  <ProductCard.ProductTitle />
                  <div className="flex gap-2">
                    <ProductCard.ProductDiscount />
                    <ProductCard.ProductPrice />
                  </div>
                  <ProductCard.ProductRating />
                </div>
                <ProductCard.ProductAction />
                <ProductCard.ProductBadget />
                
              </ProductCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center md:mt-15 mt-10">
        <Button text="View All Products" />
      </div>
      <div className="max-container">
        <div className="w-full h-[1px] bg-gray-300 md:mt-15 mt-10"></div>
      </div>
    </div>
  );
};

export default FlashSales;
