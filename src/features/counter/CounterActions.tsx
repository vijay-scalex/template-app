import React from "react";
import { default as useCounterStore } from "../../store/counter/counter.store";

const CounterActions = () => {
  const increase = useCounterStore.use.increase();
  const decrease = useCounterStore.use.decrease();
  const reset = useCounterStore.use.reset();

  const handleIncreaseClick = () => increase(1);
  const handleDecreaseClick = () => decrease(1);
  const handleResetClick = () => reset();

  return (
    <div className="d-flex">
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={handleIncreaseClick}
      >
        + Inc
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={handleResetClick}
      >
        Reset
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={handleDecreaseClick}
      >
        - Dec
      </button>
    </div>
  );
};

export default React.memo(CounterActions);
