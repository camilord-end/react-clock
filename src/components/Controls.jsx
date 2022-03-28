export const Controls = ({
  type,
  incrementHandler,
  decrementHandler,
  timer,
}) => {
  return (
    <div className={type}>
      <div className="tittle" id={`${type}-label`}>
        {type}
      </div>
      <div className="buttons">
        <button id={`${type}-decrement`} onClick={decrementHandler}>
          {type} decrement
        </button>
        <button id={`${type}-increment`} onClick={incrementHandler}>
          {type} increment
        </button>
      </div>
      <div className="display" id={`${type}-length`}>
        {timer}
      </div>
    </div>
  );
};
