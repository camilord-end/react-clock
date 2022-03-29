import moment from "moment";

import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import "../styles/Session.css";

export const Session = ({ length, handleIncrement, handleDecrement }) => {
  const sessionLengthMinutes = moment.duration(length, "s").asMinutes();
  return (
    <div className="session">
      <h3 id="session-label">Session</h3>
      <div className="session-buttons">
        <button id="session-decrement" onClick={handleDecrement}>
          <FaAngleDown />
        </button>
        <p id="session-length">{sessionLengthMinutes}</p>
        <button id="session-increment" onClick={handleIncrement}>
          <FaAngleUp />
        </button>
      </div>
    </div>
  );
};
