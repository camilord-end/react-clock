import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
//import { useState, useEffect } from "react";

momentDurationFormatSetup(moment);

export const TimeLeft = ({
  displayLabel,
  handler,
  startStopLabel,
  timeLeft,
}) => {
  const formattedTimeLeft = moment
    .duration(timeLeft, "s")
    .format("mm:ss", { trim: false });
  return (
    <div>
      <h2 id="timer-label">{displayLabel}</h2>
      <p id="time-left">{formattedTimeLeft}</p>
      <button id="start_stop" onClick={handler}>{startStopLabel}</button>
    </div>
  );
};
