import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

import { FaUndo } from "react-icons/fa";
import "../styles/TimeLeft.css"

momentDurationFormatSetup(moment);

export const TimeLeft = ({
  displayLabel,
  handler,
  startStopLabel,
  timeLeft,
  handleReset,
}) => {
  const formattedTimeLeft = moment
    .duration(timeLeft, "s")
    .format("mm:ss", { trim: false });
  return (
    <>
      <h2 id="timer-label">{displayLabel}</h2>
      <p id="time-left">{formattedTimeLeft}</p>
      <div className="time-left-buttons">
        <button id="start_stop" onClick={handler}>
          {startStopLabel}
        </button>
        <button id="reset" onClick={handleReset}>
          <FaUndo />
        </button>
      </div>
    </>
  );
};
