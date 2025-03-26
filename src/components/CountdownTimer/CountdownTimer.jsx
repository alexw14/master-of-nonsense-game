import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
import "./CountdownTimer.css";

const CountdownTimer = ({ onTimerEnd }) => {
  const [timeLeft, setTimeLeft] = useState(30);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (!isActive) return;
    if (timeLeft <= -1) {
      if (onTimerEnd) {
        onTimerEnd();
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimerEnd, isActive]);

  const handleEnd = () => {
    setIsActive(false);
    if (onTimerEnd) {
      onTimerEnd();
    }
  };

  return (
    <div className="countdown-timer-container">
      <div className="countdown-timer">
        <CircularProgressbar
          value={(timeLeft / 30) * 100}
          text={`${timeLeft}`}
          styles={buildStyles({
            textSize: "20px",
            pathColor: timeLeft <= 5 ? "#df4f72" : "#22a1d2",
            textColor: "#000",
            trailColor: "#444",
          })}
        />
      </div>
      <button className="end-button" onClick={handleEnd}>
        返回 / Back
      </button>
    </div>
  );
};

export default CountdownTimer;
