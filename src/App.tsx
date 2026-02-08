import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Logedin } from "./LogedIn.tsx";
import { FilteredListExample } from "./filterItems.tsx";
function App() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  // const [timeLeft, setTimeLeft] = useState<String | null | Number>(null);
  const [totalTime, setTotalTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<null | number>(null);

  const reset = () => {
    setMinutes(0);
    setSeconds(0);
    // setTimeLeft(0);
    setTotalTime(0);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const pauseResume = () => {
    if (totalTime > 0) {
      setIsPaused((prev) => !prev);
    }
  };
  const startTimer = () => {
    //const timel = `${minutes} : ${seconds}`;
    // const timel = minutes + seconds;
    const totalTime = minutes * 60 + seconds;
    // setTimeout(() => {
    //   console.log("run after 2 sec");
    // }, 2000);

    setTotalTime(totalTime);
  };

  useEffect(() => {
    if (totalTime > 0 && !isPaused) {
      intervalRef.current = setInterval(() => {
        setTotalTime((prev) => {
          const newValue = prev - 1;

          if (newValue <= 0) {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
              intervalRef.current = null;
            }
            return 0;
          }
          return newValue;
        });
      }, 1000);
    } else if (intervalRef.current) {
      intervalRef.current = null;
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [totalTime, isPaused]);

  //  MM:SS
  return (
    <>
      <div>
        <div>
          <h5>Minutes</h5>
          <h5>Seconds</h5>
        </div>

        <div>
          <input
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
          />
          <input
            type="number"
            value={seconds}
            onChange={(e) => setSeconds(Number(e.target.value))}
          />
        </div>
        <div>
          <button onClick={startTimer}>start</button>
          <button onClick={pauseResume}>Pause/Resume</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
      <div>
        <span>
          <strong>Time</strong> {totalTime}
        </span>
      </div>
      <Logedin />
      <FilteredListExample />
    </>
  );
}

export default App;
