import BreadCrumb from "../../components/ui/BreadCrumb";
import Table from "../../components/ui/Table";
import type { Column } from "../../components/ui/Table";
import {
  ChevronDown,
  ChevronDownSquareIcon,
  ChevronUpSquareIcon,
  X,
} from "lucide-react";
import Button from "../../components/ui/Button";
import { useContext, useEffect, useState } from "react";
import DeletePopup from "../../components/ui/DeletePopup";
import CartTotal from "../../components/CartTotal";
import type { ProductCart, ProductType } from "../../types";
import Coupon from "../../components/Coupon";
import { CartContext } from "../../context/CartProvider";

const Cart = () => {
  const [popup, setPopup] = useState<boolean>(false);
  const [productId, setProductId] = useState<string>("");

  const [cart, setCart] = useState<ProductType[]>([]);

  const [data, setData] = useState<ProductCart[]>([]);
  const columns: Column<ProductCart>[] = [
    { key: "product", lable: "Product" },
    { key: "price", lable: "Price" },
    { key: "quantity", lable: "Quantity" },
    { key: "total", lable: "Subtotal" },
  ];
  const context = useContext(CartContext) ?? {
    cart: [],
    removeFromCart: () => {},
    addToCart: () => {},
    removeQuantity: () => {},
  };

  useEffect(() => {
    setCart(context.cart);
  }, [context.cart]);

  useEffect(() => {
    const arr = cart.map((item) => ({
      productId: item.id,
      productName: item.title,
      product: (
        <div className="flex gap-3 items-center">
          <div className="relative">
            <div
              onClick={() => {
                setProductId(item.id);
                setPopup(true);
              }}
              className="cursor-pointer hover:bg-red-700 absolute top-2 -left-2 bg-primary text-white rounded-full p-1"
            >
              <X size={18} strokeWidth={4} />
            </div>
            <img className="max-w-16" src={item.image} alt="" />
          </div>
          <div className="sm:text-lg"></div>
        </div>
      ),
      price: item.price,
      quantity: (
        <div className="flex border border-gray-300 rounded-sm items-center w-fit p-3 py-2 gap-3">
          <div className="text-lg font-medium">{item.quantity ?? "01"}</div>
          <div className="flex flex-col gap-1">
            <ChevronUpSquareIcon
              onClick={() => {
                context.addToCart(item);
              }}
              className="text-gray-700 hover:text-gray-500 cursor-pointer"
            />
            <ChevronDownSquareIcon
              onClick={() => {
                if (item.quantity === 1) return;
                context.removeQuantity(item);
              }}
              className="text-gray-700 hover:text-gray-500 cursor-pointer"
            />
          </div>
        </div>
      ),
      total: item.price * 1,
    }));
    setData(arr);
  }, [cart]);

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
              onConfirm={() => {
                context.removeFromCart(productId);
                setPopup(false);
              }}
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
