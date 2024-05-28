import React from "react";
import useCounterStore from "../../store/counter/counter.store";

const CounterBanner = () => {
  const counter: number = useCounterStore.use.counter();

  return <div className="d-flex h1">Counter: {counter}</div>;
};

export default React.memo(CounterBanner);
