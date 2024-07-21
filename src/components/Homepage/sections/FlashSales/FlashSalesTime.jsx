import { useEffect } from "react";
import { useState } from "react";

const FlashSalesCountdown = () => {
  const targetDate = new Date("2027-12-31 23:59:59");
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    // returning days and time left in milliseconds
    let timeLeft = {};

    // converting from milliseconds if the days and time is not up to 0 (the target date)
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };
  const [flashSalesTime, setFlashTime] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setFlashTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const flashDaysLeft = `${flashSalesTime.days} : ${flashSalesTime.hours} : ${flashSalesTime.minutes} : ${flashSalesTime.seconds}`;

  return (
    <nav className="flashSales--nav p-3">
      <h5 className="today--nav p-2 mb-4">Today`s</h5>
      <div className="flashTime d-flex gap-5">
        <h2>Flash Sales</h2>
        <div className="d-flex gap-2">
          <div className="daysLeft">
            <a>Days</a>
            <h4>{flashSalesTime.days}</h4>
          </div>
          <div>:</div>
          <div className="hoursLeft">
            <a>Hours</a>
            <h4>{flashSalesTime.hours}</h4>
          </div>
          <div>:</div>
          <div className="minutesLeft">
            <a>Minutes</a>
            <h4>{flashSalesTime.minutes}</h4>
          </div>
          <div>:</div>
          <div className="secondsLeft">
            <a>Seconds</a>
            <h4>{flashSalesTime.seconds}</h4>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FlashSalesCountdown;
