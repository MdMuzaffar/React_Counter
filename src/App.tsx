import { useState } from "react";
import "./App.css";

const InitialMinutes = 0;
function App() {
  return (
    <>
      <div>
        <div>
          <h5>Minutes</h5>
          <h5>Seconds</h5>
        </div>

        <div>
          <input type="number" />
          <input type="number" />
        </div>
        <div>
          <button>start</button>
          <button>Pause</button>
          <button>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
