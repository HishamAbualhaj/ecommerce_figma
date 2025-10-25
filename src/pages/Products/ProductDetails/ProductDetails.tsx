import { useState } from "react";
import BreadCrumb from "../../../components/ui/BreadCrumb";
import { Minus, Plus, Heart, Star, Truck } from "lucide-react";
import Button from "../../../components/ui/Button";
import Gaming_main from "../../../assets/Gamepad_main.png";
import Gaming_1 from "../../../assets/Gamepad_1.png";
import Gaming_2 from "../../../assets/Gamepad_2.png";
import Gaming_3 from "../../../assets/Gamepad_3.png";
import Delivery from "../../../assets/icon-delivery.svg";
import Return from "../../../assets/Icon-return.svg";
import Heading from "../../../components/ui/Heading";
import ProductCard from "../../../components/ui/ProductCard";
import Product_1 from "../../../assets/product_1.png";
const ProductDetails = () => {
  const product = {
    name: "Havic HV G-92 Gamepad",
    imageUrl: [Gaming_main, Gaming_1, Gaming_2, Gaming_3],
    price: 192.0,
    rating: 4,
    reviews: 150,
    status: "In Stock",
    description:
      "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
    colours: [
      { name: "Blue", value: "#A0BCE0" },
      { name: "Red", value: "#E07575" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
  };
  const [selectedColor, setSelectedColor] = useState(product.colours[0].value);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(0);
  const products = [
    {
      title: "HAVIT HV-G92 Gamepad",
      price: 160,
      discount: 40,
      stars: 5,
      reviews: 88,
      image: Product_1,
      isFavorite: false,
      badget: "Discount",
    },
    {
      title: "AK-900 Wired Keyboard",
      price: 1160,
      discount: 35,
      stars: 4,
      reviews: 75,
      image: Product_1,
      isFavorite: false,
      badget: "Discount",
    },
    {
      title: "IPS LCD Gaming Monitor",
      price: 400,
      discount: 30,
      stars: 5,
      reviews: 99,
      image: Product_1,
      isFavorite: false,
      badget: "Discount",
    },
    {
      title: "HAVIT HV-G92 Gamepad",
      price: 160,
      discount: 40,
      stars: 5,
      reviews: 88,
      image: Product_1,
      isFavorite: false,
    },
  ];
  return (
    <div className="pb-10 max-container">
      <div className="py-16">
        <BreadCrumb label="/productDetails" segment="Havic HV G-92 Gamepad" />
      </div>
      <div className="flex max-xl:flex-col xl:gap-20 gap-5">
        <div className="flex max-lg:flex-col gap-5">
          <div className="lg:flex grid grid-cols-2 overflow-auto  lg:flex-col gap-3">
            {product.imageUrl.map((image, i) => (
              <div
                onClick={() => {
                  setImage(i);
                }}
                key={i}
                className="bg-gray-100 rounded-sm flex justify-center items-center"
              >
                <img className="lg:max-w-52" src={image} alt="" />
              </div>
            ))}
          </div>
          <div className="flex-1 max-lg:-order-1 grid place-items-center bg-gray-100 rounded-sm">
            <img src={product.imageUrl[image]} alt="" />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">{product.name}</h2>

            <div className="flex items-center gap-2 text-sm">
              <div className="flex gap-1 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < product.rating ? "currentColor" : "none"}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <span className="text-gray-500">({product.reviews} Reviews)</span>
              <span className="text-green-500 ml-auto">{product.status}</span>
            </div>

            <p className="text-2xl">${product.price.toFixed(2)}</p>
          </div>

          <p className="text-gray-600">{product.description}</p>

          <div className="flex gap-5">
            <p className="font-semibold mb-1">Colours:</p>
            <div className="flex gap-2">
              {product.colours.map((c) => (
                <div
                  key={c.value}
                  className={`rounded-full w-5 h-5 ${
                    selectedColor === c.value ? "border-3" : "border-none"
                  }`}
                >
                  <div
                    onClick={() => setSelectedColor(c.value)}
                    className={`w-full h-full rounded-full ${
                      selectedColor === c.value
                        ? "outline-2 outline-white"
                        : "border-none"
                    }`}
                    style={{ backgroundColor: c.value }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-5">
            <p className="font-semibold mb-1">Size:</p>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border rounded-md px-3 py-1 text-sm ${
                    selectedSize === size
                      ? "bg-primary text-white border-primary"
                      : "border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex flex-1 items-center border border-gray-300 rounded-sm">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-3 border-r border-gray-300"
              >
                <Minus size={16} />
              </button>
              <span className="px-4 flex-1 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-3 border-l bg-primary text-white border-gray-300"
              >
                <Plus size={16} />
              </button>
            </div>

            <Button className="!py-2 flex-1 text-center" text="Buy Now" />

            <button className="border border-gray-300 p-2 rounded-md hover:bg-gray-100">
              <Heart size={20} />
            </button>
          </div>

          <div className="border border-gray-300 rounded-sm mt-5">
            <div className="flex gap-3 items-center border-b border-gray-300 p-5">
              <img src={Delivery} alt="" />
              <div className="flex flex-col gap-1">
                <div className="text-lg font-medium">Free Delivery</div>
                <div className="underline">
                  Enter your postal code for Delivery Availability
                </div>
              </div>
            </div>
            <div className="flex gap-3 items-center p-5">
              <img src={Return} alt="" />
              <div className="flex flex-col gap-2">
                <div className="text-lg font-medium">Return Delivery</div>
                <div className="underline">
                  Free 30 Days Delivery Returns. Details
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16">
        <Heading title="" label="Related Item" />
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-5 mt-10">
          {products.map((product, i) => (
            <ProductCard
              {...product}
              badget={product.badget as "New" | "Hot" | "Discount" | undefined}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
