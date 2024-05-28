import CounterActions from "../features/counter/CounterActions";
import CounterBanner from "../features/counter/CounterBanner";

const CounterPage = () => {
  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <CounterBanner />
      <CounterActions />
    </div>
  );
};

export default CounterPage;
