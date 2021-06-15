import { useEffect, useState } from "react";
import "./Timer.css";

const Timer = () => {
  // state hooks
  const [elapsedTime, setElapsedTime] = useState(0);
  console.log("elapsedTime: ", elapsedTime);

  // effect hooks
  useEffect(() => {
    setElapsedTime(999999);
  }, []);

  return (
    <div className="timer">
      <p>Timer</p>
    </div>
  );
};

export default Timer;
