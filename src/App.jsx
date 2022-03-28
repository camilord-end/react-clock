import { useState } from "react";
import "./App.css";
import { Controls } from "./components/Controls";

export const App = () => {
  const [breakTimer, setBreakTimer] = useState(5);
  const [sessionTimer, setSessionTimer] = useState(25);

  const handleBreakDecrement = () => {
    if (breakTimer > 0) {
      setBreakTimer(breakTimer - 1);
    }
  };

  const handleBreakIncrement = () => {
    if (breakTimer < 60) {
      setBreakTimer(breakTimer + 1);
    }
  };

  const handleSessionDecrement = () => {
    if (sessionTimer > 0) {
      setSessionTimer(sessionTimer - 1);
    }
  };

  const handleSessionIncrement = () => {
    if (sessionTimer < 60) {
      setSessionTimer(sessionTimer + 1);
    }
  };

  return (
    <div className="container">
      <div className="tittle">React 25+5 Clock</div>
      <div className="controls">
        <Controls
          type={"break"}
          timer={breakTimer}
          decrementHandler={handleBreakDecrement}
          incrementHandler={handleBreakIncrement}
        />
        <Controls
          type={"session"}
          timer={sessionTimer}
          decrementHandler={handleSessionDecrement}
          incrementHandler={handleSessionIncrement}
        />
      </div>

      <div className="timer">
        <div className="tittle" id="timer-label">
          Session/Break
        </div>
        <div className="display" id="time-left">
          23:23
        </div>
        <div className="buttons">
          <button id="start_stop">start/stop</button>
          <button id="reset">reset</button>
        </div>
      </div>
    </div>
  );
};
