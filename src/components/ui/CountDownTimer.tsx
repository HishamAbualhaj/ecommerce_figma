import { useEffect, useState } from "react";
import calculateTimeLeft from "../../utils/calculateTimeLeft";

interface CountdownTimerProps {
  targetDate: string;
}
const CountDownTimer = ({ targetDate }: CountdownTimerProps) => {

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timerItems = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.min },
    { label: "Seconds", value: timeLeft.sec },
  ];
  return (
    <div className="flex items-center justify-center gap-5">
      {timerItems.map((item, i) => (
        <div key={i} className="flex flex-col items-start gap-2">
          <div className="max-lg:text-sm">{item.label}</div>
          <div className="font-bold lg:text-4xl text-2xl flex gap-4">
            <div>{item.value}</div> {i > 2 || <div className="">:</div>}
          </div>
        </div>
      ))}
    </div>
  );
};
export default CountDownTimer;
