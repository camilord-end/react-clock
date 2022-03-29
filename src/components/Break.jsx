import moment from "moment";

import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import "../styles/Break.css"

export const Break = ({length,handleIncrement,handleDecrement}) => {
  const breakLengthMinutes = moment.duration(length, 's').minutes()

  return (
    <div className="break">
      <h3 id="break-label">Break</h3>
      <p id="break-length">{breakLengthMinutes}</p>
      <button id="break-decrement" onClick={handleDecrement}>
        <FaAngleDown />
      </button>
      <button id="break-increment" onClick={handleIncrement}>
        <FaAngleUp />
      </button>
    </div>
  );
};
