import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartProvider";

const CartTotal = () => {
  const [total, setTotal] = useState<number>(0);
  const [cartDetails, setCartDetails] = useState<
    { title: string; value: number | string }[]
  >([
    {
      title: "Subtotal:",
      value: "",
    },
    {
      title: "Shipping:",
      value: "Free",
    },
  ]);

  const cart = useContext(CartContext)?.cart;

  useEffect(() => {
    let total = 0;
    cart?.forEach((item) => {
      total += item.price * (item.quantity ?? 1);
    });
    setTotal(total);
  }, [cart]);

  useEffect(() => {
    setCartDetails([
      {
        title: "Subtotal:",
        value: total,
      },
      {
        title: "Shipping:",
        value: "Free",
      },
    ]);
  }, [total]);
  return (
    <div className="flex flex-col gap-6">
      {cartDetails.map((cartItem, i) => (
        <div
          key={i}
          className="flex justify-between pb-2 border-b border-gray-300"
        >
          <div className="">{cartItem.title}</div>
          <div className="">{cartItem.value}</div>
        </div>
      ))}
      <div className="flex justify-between pb-2">
        <div className="">Total:</div>
        <div className="">{total}</div>
      </div>
    </div>
  );
};

export default CartTotal;
