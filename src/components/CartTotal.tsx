const CartTotal = () => {
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
  );
};

export default CartTotal;
