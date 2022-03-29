import { useState, useEffect, useRef } from "react";

import "./styles/App.css";
import { FaMoon, FaPause, FaPlay, FaSun } from "react-icons/fa";

import { Break } from "./components/Break";
import { Session } from "./components/Session";
import { TimeLeft } from "./components/TimeLeft";

export const App = () => {
  const audioElement = useRef(null);
  const [breakLength, setBreakLength] = useState(300);
  const [sessionLength, setSessionLength] = useState(1500);
  const [intervalId, setIntervalId] = useState(null);
  const [displayType, setDisplayType] = useState("Session");
  const [timeLeft, setTimeLeft] = useState(sessionLength);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  const handleBreakIncrement = () => {
    if (breakLength > 3600) setBreakLength(breakLength + 60);
  };

  const handleBreakDecrement = () => {
    if (breakLength > 60) {
      setBreakLength(breakLength - 60);
    }
  };

  const handleSessionIncrement = () => {
    setSessionLength(sessionLength + 60);
  };

  const handleSessionDecrement = () => {
    if (sessionLength > 60) {
      setSessionLength(sessionLength - 60);
    }
  };

  const handleReset = () => {
    audioElement.current.load();
    clearInterval(intervalId);
    setIntervalId(null);
    setDisplayType("Session");
    setSessionLength(1500);
    setBreakLength(300);
    setTimeLeft(1500);
  };

  const isStarted = intervalId !== null;

  const handleStartStop = () => {
    if (isStarted) {
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      const newIntervalId = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          }
          audioElement.current.play();
          if (displayType === "Session") {
            setDisplayType("Break");
            setTimeLeft(breakLength);
          } else if (displayType === "Break") {
            setDisplayType("Session");
            setTimeLeft(sessionLength);
          }
        });
      }, 1000);
      setIntervalId(newIntervalId);
    }
  };

  const handleDarkMode = () => {
    if (theme === "dark") {
      setTheme("ligth");
    }
    if (theme === "ligth") {
      setTheme("dark");
    }
  };

  return (
    <div className="container">
      <div className="tittle">
        <h1>React 25 + 5 Clock</h1>
      </div>
      <div className="controls">
        <Break
          length={breakLength}
          handleDecrement={handleBreakDecrement}
          handleIncrement={handleBreakIncrement}
        />
        <Session
          length={sessionLength}
          handleDecrement={handleSessionDecrement}
          handleIncrement={handleSessionIncrement}
        />
      </div>
      <TimeLeft
        sessionLegth={sessionLength}
        breakLength={breakLength}
        displayLabel={displayType}
        handler={handleStartStop}
        startStopLabel={isStarted ? <FaPause /> : <FaPlay />}
        timeLeft={timeLeft}
        handleReset={handleReset}
      />
      <div className="audio-container">
        <audio id="beep" ref={audioElement}>
          <source
            src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
            type="audio/mpeg"
          />
        </audio>
      </div>

      <div className="dark-mode-toggle">
        <button id="toggle" onClick={handleDarkMode}>
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
};
