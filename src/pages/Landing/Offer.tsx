import Button from "../../components/ui/Button";
import product_4 from "../../assets/product_4.png";
import { useEffect, useState } from "react";
import calculateTimeLeft from "../../utils/calculateTimeLeft";
const Offer = () => {
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft("2025-10-14T00:00:00")
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft("2025-10-14T00:00:00"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerItems = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.min },
    { label: "Seconds", value: timeLeft.sec },
  ];

  return (
    <div className="py-10 pb-16">
      <div className="max-container  bg-dark py-16 xl:px-20 md:px-10 px-3">
        <div className="flex max-lg:flex-col max-lg:gap-10 justify-between items-center">
          <div className="flex flex-col lg:gap-10 gap-5">
            <div className="text-green-400 font-medium text-xl">Categories</div>
            <div className="xl:text-7xl lg:text-6xl text-4xl text-white font-medium">
              Enhance Your <br /> Music Experience
            </div>
            <div className="flex lg:gap-5 gap-3">
              {timerItems.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-center items-center md:w-19 w-16 h-16 md:h-19 rounded-full bg-white"
                >
                  <div className="font-bold text-lg">{item.value}</div>
                  <div className="text-sm">{item.label}</div>
                </div>
              ))}
            </div>
            <Button text="Buy Now!" className="!bg-green-400 w-fit" />
          </div>
          <div className="relative max-lg:-order-1">
            <img
              className="relative z-10 block md:max-w-[750px] max-w-full"
              src={product_4}
              alt="product_4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
