export const Controls = ({
  type,
  incrementHandler,
  decrementHandler,
  timer,
}) => {
  return (
    <div className={type}>
      <div className="tittle" id="break-label">
        {type}
      </div>
      <div className="buttons">
        <button id="break-decrement" onClick={decrementHandler}>
          {type} decrement
        </button>
        <button id="break-increment" onClick={incrementHandler}>
          {type} increment
        </button>
      </div>
      <div className="display" id="break-length">
        {timer}
      </div>
    </div>
  );
};
