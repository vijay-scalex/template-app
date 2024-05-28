import { create } from "zustand";
import { devtools } from "zustand/middleware";
import createSelectors from "../../util/selector/createSelectors";

interface CounterState {
  counter: number;
}

interface CounterAction {
  increase: (by: number) => void;
  decrease: (by: number) => void;
  reset: () => void;
}

const useCounterStoreBase = create<CounterState & CounterAction>()(
  devtools(
    (set) => ({
      counter: 0,
      increase: (by: number) =>
        set(
          (state: CounterState) => ({ counter: state.counter + by }),
          false,
          "counter/increase"
        ),
      decrease: (by: number) => {
        set(
          (state: CounterState) => ({ counter: state.counter - by }),
          false,
          "counter/decrease"
        );
      },
      reset: () => set(() => ({ counter: 0 }), false, "counter/reset"),
    }),
    { name: "Counter Store" }
  )
);

const useCounterStore = createSelectors(useCounterStoreBase);

export default useCounterStore;
