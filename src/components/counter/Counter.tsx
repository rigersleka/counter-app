import { useReducer, useState } from "react";

import { decrement, increment, reset } from "../../utils/counter.action";
import counterReducer, {
  initialCounterState,
} from "../../utils/counter.reducer";
import "./Counter.css";

export  const Counter = () => {
  const [value, setValue] = useState<number>(0);
  const [state, dispatch] = useReducer(counterReducer, initialCounterState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <div className="container">
      <input
        type="number"
        name="count"
        value={value}
        onChange={handleChange}
      />

      <p>{state.count}</p>
      <div className="wrapper">
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
    </div>
  );
};
