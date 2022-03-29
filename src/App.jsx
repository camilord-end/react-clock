import { useState, useEffect, useRef } from "react";
import useLocalStorage from "use-local-storage";

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
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "ligth");

  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  useEffect(() => {
    if (timeLeft === 0) {
      const newTheme = theme === "ligth" ? "dark" : "ligth";
      setTheme(newTheme);
      audioElement.current.play();
      if (displayType === "Session") {
        setDisplayType("Break");
        setTimeLeft(breakLength);
      } else if (displayType === "Break") {
        setDisplayType("Session");
        setTimeLeft(sessionLength);
      }
    }
  }, [timeLeft, displayType, breakLength, sessionLength]);

  const handleBreakIncrement = () => {
    const newBreakLength = breakLength + 60;
    newBreakLength <= 3600 && setBreakLength(newBreakLength);
  };

  const handleBreakDecrement = () => {
    const newBreakLength = breakLength - 60;
    newBreakLength > 0 && setBreakLength(newBreakLength);
  };

  const handleSessionIncrement = () => {
    const newSessionLength = sessionLength + 60;
    newSessionLength <= 3600 && setSessionLength(newSessionLength);
  };

  const handleSessionDecrement = () => {
    const newSessionLength = sessionLength - 60;
    newSessionLength > 0 && setSessionLength(newSessionLength);
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
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      setIntervalId(newIntervalId);
    }
  };

  const handleDarkMode = () => {
    const newTheme = theme === "ligth" ? "dark" : "ligth";
    setTheme(newTheme);
  };

  return (
    <div className="container" data-theme={theme}>
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
      <div className="time-left-container">
        <TimeLeft
          sessionLegth={sessionLength}
          breakLength={breakLength}
          displayLabel={displayType}
          handler={handleStartStop}
          startStopLabel={isStarted ? <FaPause /> : <FaPlay />}
          timeLeft={timeLeft}
          handleReset={handleReset}
        />
      </div>
      <div className="audio-container">
        <audio id="beep" ref={audioElement}>
          <source
            src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
            type="audio/mpeg"
          />
        </audio>
      </div>

      <div className="dark-mode-toggle" id="toggle" onClick={handleDarkMode}>
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </div>
    </div>
  );
};
