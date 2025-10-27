import Heading from "../../components/ui/Heading";
import ProductCard from "../../components/ui/ProductCard";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Button from "../../components/ui/Button";
import { products } from "../../data/data";
const OurProduct = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="max-container">
      <div className="flex items-center justify-between">
        <Heading label="Our Products" title="Explore Our Products" />

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
      <div className="mt-10">
        <Swiper
          modules={[Navigation]}
          grid={{ rows: 2, fill: "row" }}
          className="w-full overflow-hidden"
          spaceBetween={20}
          slidesPerView={4}
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
            1280: { slidesPerView: 4 },
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
                <div className="py-3">
                  <ProductCard.ProductColorSwitch />
                </div>
              </ProductCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center md:mt-15 mt-10">
        <Button className="md:!px-16" text="View All Products" />
      </div>
    </div>
  );
};

export default OurProduct;
