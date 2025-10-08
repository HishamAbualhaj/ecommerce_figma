import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string;
}
const CountDownTimer = ({ targetDate }: CountdownTimerProps) => {
  const calculateTimeLeft = () => {
    let timeLeft = {
      days: "00",
      hours: "00",
      min: "00",
      sec: "00",
    };
    const difference = Number(new Date(targetDate)) - Number(new Date());

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(Math.floor((difference / (1000 * 60)) % 24)).padStart(
          2,
          "0"
        ),
        min: String(Math.floor((difference / (1000 * 60 * 60)) % 60)).padStart(
          2,
          "0"
        ),
        sec: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
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
          <div className="">{item.label}</div>
          <div className="font-bold text-4xl flex gap-4">
            <div>{item.value}</div> {i > 2 || <div className="">:</div>}
          </div>
        </div>
      ))}
    </div>
  );
};
export default CountDownTimer;
