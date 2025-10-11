const calculateTimeLeft = (targetDate: string) => {
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

export default calculateTimeLeft;
