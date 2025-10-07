import { ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import apple from "../assets/apple_image.jpg";
import apple_logo from "../assets/apple_logo.png";
const Hero = () => {
  const categories = [
    {
      name: "Woman's Fashion",
      subCategories: [
        { title: "Dresses", link: "/fashion/women/dresses" },
        { title: "Tops & Blouses", link: "/fashion/women/tops" },
        { title: "Jeans & Pants", link: "/fashion/women/jeans" },
        { title: "Activewear", link: "/fashion/women/activewear" },
        { title: "Footwear", link: "/fashion/women/footwear" },
        { title: "Accessories", link: "/fashion/women/accessories" },
      ],
    },
    {
      name: "Men's Fashion",
      subCategories: [
        { title: "Shirts", link: "/fashion/men/shirts" },
        { title: "T-Shirts & Polos", link: "/fashion/men/tshirts" },
        { title: "Pants & Shorts", link: "/fashion/men/pants" },
        { title: "Outerwear", link: "/fashion/men/outerwear" },
        { title: "Shoes", link: "/fashion/men/shoes" },
        { title: "Watches & Jewelry", link: "/fashion/men/accessories" },
      ],
    },
    { name: "Electronics" },
    { name: "Home & Lifestyle" },
    { name: "Medicine" },
    { name: "Sports & Outdoor" },
    { name: "Baby's & Toys" },
    { name: "Groceries & Pets" },
    { name: "Health & Beauty" },
  ];

  return (
    <div className="max-container">
      <div className="flex">
        <ul className="flex flex-col border-r pt-10 border-gray-200 pr-5 gap-2">
          {categories.map((category, index) => (
            <CategoryListItem key={index} category={category} />
          ))}
        </ul>
        <div className="flex-1 px-10 pt-10 flex justify-center mt-2">
          <div className="w-full h-fit flex justify-between items-ce">
            <div className="py-10 px-12 text-white bg-dark flex-1">
              <div className="flex items-center gap-5 mt-5">
                <img className="w-16 h-16" src={apple_logo} alt="" />
                <div className="">iPhone 14 Series</div>
              </div>
              <div className="text-6xl font-medium leading-20 max-w-[350px] mt-4">
                Up to 10% off Voucher
              </div>

              <div className="flex mt-4 gap-3 items-center">
                <a className="border-b pb-1 text-xl" href="">
                  Shop Now
                </a>
                <ArrowRight />
              </div>
            </div>
            <div className="pt-5 bg-dark">
              <img className="max-w-[600px]" src={apple} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoryListItem = ({
  category,
}: {
  category: { name: string; subCategories?: { title: string; link: string }[] };
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <li
        className="overflow-hidden"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className="flex gap-10 items-center justify-between  py-2 cursor-pointer">
          <div className="px">{category.name}</div>
          {category.subCategories &&
            category.subCategories.length > 0 &&
            (isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />)}
        </div>
        {category.subCategories && category.subCategories.length > 0 && (
          <SubCategory subCategories={category.subCategories} isOpen={isOpen} />
        )}
      </li>
    </>
  );
};
const SubCategory = ({
  subCategories,
  isOpen,
}: {
  subCategories: Record<string, any>[];
  isOpen: boolean;
}) => {
  return (
    <ul
      className={`ml-8 ${
        isOpen && ""
      } flex flex-col gap-4 transition-all duration-300 ${
        isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      {subCategories.map((sub, subIndex) => (
        <li className="hover:underline cursor-pointer" key={`$-${subIndex}`}>
          <a className="block" href={sub.link}>
            {sub.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default Hero;
