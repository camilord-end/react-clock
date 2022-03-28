import { useState } from "react";
import { Controls } from "./components/Controls";

import "./App.css";

export const App = () => {
  const [breakTimer, setBreakTimer] = useState(5);
  const [sessionTimer, setSessionTimer] = useState(25);
  const [seconds, setSeconds] = useState(0);

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

  const handleSeconds = () => {
    if (sessionTimer>0){
      setSessionTimer(sessionTimer-1)
      setSeconds(59)
    }
    
  };

  const handleReset = () => {
    setBreakTimer(5);
    setSessionTimer(25);
    setSeconds(0);
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
          <h3>{sessionTimer > 0 ? "Session" : "Break"}</h3>
        </div>
        <div className="display" id="time-left">
          {sessionTimer > 0 ? sessionTimer : breakTimer} :
          {seconds<10 ? ` 0${seconds}`: ` ${seconds}` }
        </div>
        <div className="buttons">
          <button id="start_stop" onClick={handleSeconds}>
            start/stop
          </button>
          <button id="reset" onClick={handleReset}>
            reset
          </button>
        </div>
      </div>
    </div>
  );
};
