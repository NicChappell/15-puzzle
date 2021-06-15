import { useEffect, useState } from "react";
import "./Timer.css";

const Timer = () => {
  // state hooks
  const [elapsedTime, setElapsedTime] = useState(0);

  // effect hooks
  useEffect(() => {
    // start timer
    const timer = setInterval(() => {
      setElapsedTime((elapsedTime) => elapsedTime + 1);
    }, 1000);

    // cleanup
    return () => clearInterval(timer);
  }, []);

  // format elapsed time
  const date = new Date(elapsedTime);
  date.setSeconds(elapsedTime);
  const timeString = date.toISOString().substr(11, 8);

  return (
    <div className="timer">
      <p>Elapsed time: {timeString}</p>
    </div>
  );
};

export default Timer;
