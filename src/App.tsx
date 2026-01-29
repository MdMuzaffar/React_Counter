import { useState } from "react";
import "./App.css";

function App() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState<String | null>(null);

  const reset = () => {
    setMinutes(0);
    setSeconds(0);
  };

  const startTimer = () => {
    const timel = `${minutes} : ${seconds}`;
    // const timel = minutes + seconds;
    setTimeLeft(timel);
  };

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
          <button>Pause</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
      <div>
        <span>
          <strong>Time</strong> {timeLeft}
        </span>
      </div>
    </>
  );
}

export default App;
