import Footer from "../../components/Footer";
import Header from "../../components/Header";
import BreadCrumb from "../../components/ui/BreadCrumb";
import type { ProductCart } from "../../types";
import Product from "../../assets/product_1.png";
import CartTotal from "../../components/CartTotal";
import { useState } from "react";
import payment_1 from "../../assets/payment_1.png";
import payment_2 from "../../assets/payment_2.png";
import payment_3 from "../../assets/payment_3.png";
import payment_4 from "../../assets/payment_4.png";
import Button from "../../components/ui/Button";
import Coupon from "../../components/Coupon";
const Checkout = () => {
  const inputs = [
    {
      label: "First Name",
      input: <input placeholder="" type="text" />,
      isRequried: true,
    },
    {
      label: "Company Name",
      input: <input placeholder="" type="text" />,
      isRequried: false,
    },
    {
      label: "Street Address",
      input: <input placeholder="" type="text" />,
      isRequried: true,
    },
    {
      label: "Apartment, floor, etc. (optional)",
      input: <input placeholder="" type="text" />,
      isRequried: false,
    },
    {
      label: "Town/City",
      input: <input placeholder="" type="text" />,
      isRequried: true,
    },
    {
      label: "Phone Number",
      input: <input placeholder="" type="text" />,
      isRequried: true,
    },
    {
      label: "Email Address",
      input: <input placeholder="" type="email" />,
      isRequried: true,
    },
  ];

  const cartItems: ProductCart[] = [
    {
      productId: "",
      productName: "LCD Monitor",
      product: <img className="max-w-12" src={Product} alt="" />,
      price: "$650",
      quantity: "01",
      total: "$650",
    },
    {
      productId: "",
      productName: "LCD Monitor",
      product: <img className="max-w-12" src={Product} alt="" />,
      price: "$650",
      quantity: "01",
      total: "$650",
    },
  ];

  return (
    <>
      <div className="max-container pb-16">
        <div className="py-16">
          <BreadCrumb label="/checkout" />
        </div>
        <div className="text-4xl font-medium">Billing Details</div>
        <div className="flex max-xl:flex-col mt-10">
          <div className="flex-1">
            <div className="flex xl:max-w-xl flex-col mt-5 gap-8">
              {inputs.map((input, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="text-gray-400 flex gap-1">
                    {input.label}
                    {input.isRequried && <div className="text-red-400">*</div>}
                  </div>
                  {input.input}
                </div>
              ))}
            </div>
            <div className="flex gap-4 items-center mt-5">
              <input className="w-5 h-5 accent-primary" type="checkbox" />
              <div className="">
                Save this information for faster check-out next time
              </div>
            </div>
          </div>
          <div className="flex-1 mt-6 flex justify-center">
            <div className="mt-5 flex-1 xl:max-w-2xl">
              <div className="flex flex-col gap-8">
                {cartItems.map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      {item.product} {item.productName}
                    </div>
                    <div className="">{item.price}</div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <CartTotal />
              </div>
              <SelectMethod />

              <div className="flex max-sm:flex-col gap-2 mt-10">
                <Coupon />
              </div>

              <Button className="w-fit mt-10" text="Place Order" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SelectMethod = () => {
  const [select, setIsSelected] = useState<number>(1);
  return (
    <div className="mt-10 flex flex-col gap-8">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <div
            onClick={() => {
              setIsSelected(1);
            }}
            className="border rounded-full"
          >
            <div
              className={`w-5 h-5 border-3 ${
                select === 1 ? "bg-black" : "bg-white"
              } border-white rounded-full `}
            ></div>
          </div>
          <div className="">Bank</div>
        </div>

        <div className="flex gap-3">
          {[payment_1, payment_2, payment_3, payment_4].map((image, i) => (
            <img
              className="max-w-14 object-contain"
              key={i}
              src={image}
              alt="payment image"
            />
          ))}
        </div>
      </div>

      <div className="flex">
        <div className="flex items-center gap-3">
          <div
            onClick={() => {
              setIsSelected(2);
            }}
            className="border rounded-full"
          >
            <div
              className={`w-5 h-5 border-3 ${
                select === 2 ? "bg-black" : "bg-white"
              } border-white rounded-full `}
            ></div>
          </div>
          <div className="">Cash on delivery</div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
