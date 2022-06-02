import moment from "moment";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import "../styles/Break.css";

export const Break = ({ length, handleIncrement, handleDecrement }) => {
  const breakLengthMinutes = moment.duration(length, "s").asMinutes();

  return (
    <div className="break">
      <h3 id="break-label">Break</h3>
      <div className="break-buttons">
        <button id="break-decrement" onClick={handleDecrement}>
          <FaAngleDown />
        </button>
        <p id="break-length">{breakLengthMinutes}</p>
        <button id="break-increment" onClick={handleIncrement}>
          <FaAngleUp />
        </button>
      </div>
    </div>
  );
};
