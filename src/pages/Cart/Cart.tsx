import Footer from "../../components/Footer";
import Header from "../../components/Header";
import BreadCrumb from "../../components/ui/BreadCrumb";
import Table from "../../components/ui/Table";
import type { Column } from "../../components/ui/Table";
import Product from "../../assets/product_1.png";
import { X } from "lucide-react";
import Button from "../../components/ui/Button";
import { useState } from "react";
import DeletePopup from "../../components/ui/DeletePopup";
import CartTotal from "../../components/CartTotal";
import type { ProductCart } from "../../types";
import Coupon from "../../components/Coupon";

const Cart = () => {
  const [popup, setPopup] = useState<boolean>(false);
  const [productId, setProductId] = useState<string>("");
  const columns: Column<ProductCart>[] = [
    { key: "product", lable: "Product" },
    { key: "price", lable: "Price" },
    { key: "quantity", lable: "Quantity" },
    { key: "total", lable: "Subtotal" },
  ];

  const data: ProductCart[] = [
    {
      productId: "",
      productName: "",
      product: (
        <div className="flex gap-3 items-center">
          <div className="relative">
            <div
              onClick={() => {
                setPopup(true);
              }}
              className="cursor-pointer hover:bg-red-700 absolute top-2 -left-2 bg-primary text-white rounded-full p-1"
            >
              <X size={18} strokeWidth={4} />
            </div>
            <img className="max-w-16" src={Product} alt="" />
          </div>
          <div className="sm:text-lg">Product name</div>
        </div>
      ),
      price: "$650",
      quantity: "01",
      total: "$650",
    },
    {
      productId: "",
      productName: "",
      product: (
        <div className="flex gap-3 items-center">
          <div className="relative">
            <div
              onClick={() => {
                setPopup(true);
              }}
              className="cursor-pointer hover:bg-red-700 absolute top-2 -left-2 bg-primary text-white rounded-full p-1"
            >
              <X size={18} strokeWidth={4} />
            </div>
            <img className="max-w-16" src={Product} alt="" />
          </div>
          <div className="sm:text-lg">Product name</div>
        </div>
      ),
      price: "$650",
      quantity: "01",
      total: "$650",
    },
  ];

  return (
    <>
      <div className="min-h-screen max-container pb-10">
        <div className="py-10">
          <BreadCrumb label="/cart" />
        </div>
        <div className="mt-10 md:px-5">
          {popup && (
            <DeletePopup
              title="Delete Item"
              message="Are you sure you want to remove this item from your cart? This action cannot be undone."
              onConfirm={() => {}}
              onClose={() => setPopup(false)}
            />
          )}

          <div className="overflow-auto">
            <Table columns={columns} data={data} />
          </div>

          <div className="mt-5 flex justify-between">
            <div className="cursor-pointer border border-gray-300 rounded-md py-3 px-5">
              Return To Shop
            </div>
            <div className="cursor-pointer border border-gray-300 rounded-md py-3 px-5">
              Update Cart
            </div>
          </div>

          <div className="mt-10 flex max-lg:flex-col justify-between lg:items-start max-lg:gap-10">
            <div className="flex max-sm:flex-col flex-1 items-stretch gap-2">
              <Coupon />
            </div>
            <div className="border border-gray-300 rounded-md p-5 flex-1 max-w-[500px]">
              <div className="text-xl font-medium text-center">Cart Total</div>

              <CartTotal />

              <Button
                className="text-center mt-3 w-fit mx-auto"
                text="Procees to checkout"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
