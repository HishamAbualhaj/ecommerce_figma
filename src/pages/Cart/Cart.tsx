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
type Product = {
  product: React.ReactNode;
  price: React.ReactNode;
  quantity: React.ReactNode;
  total: React.ReactNode;
};
const Cart = () => {
  const [popup, setPopup] = useState<boolean>(false);
  const [productId, setProductId] = useState<string>("");
  const columns: Column<Product>[] = [
    { key: "product", lable: "Product" },
    { key: "price", lable: "Price" },
    { key: "quantity", lable: "Quantity" },
    { key: "total", lable: "Subtotal" },
  ];

  const data: Product[] = [
    {
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

  const cartDetails = [
    {
      tilte: "Subtotal:",
      value: "$1750",
    },
    {
      tilte: "Shipping:",
      value: "Free",
    },
  ];

  return (
    <>
      <Header />
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
              <input
                className="w-full max-w-[400px]"
                type="text"
                placeholder="Coupon Code"
              />
              <Button className="max-sm:w-fit" text="Apply Coupon" />
            </div>
            <div className="border border-gray-300 rounded-md p-5 flex-1 max-w-[500px]">
              <div className="text-xl font-medium text-center">Cart Total</div>

              <div className="flex flex-col gap-6">
                {cartDetails.map((cartItem, i) => (
                  <div
                    key={i}
                    className="flex justify-between pb-2 border-b border-gray-300"
                  >
                    <div className="">{cartItem.tilte}</div>
                    <div className="">{cartItem.value}</div>
                  </div>
                ))}
                <div className="flex justify-between pb-2">
                  <div className="">Total:</div>
                  <div className="">$1750</div>
                </div>
              </div>

              <Button
                className="text-center mt-3 w-fit mx-auto"
                text="Procees to checkout"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
