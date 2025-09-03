import { useDispatch, useSelector } from "react-redux";
import { increment, decriment, amountBy } from "./slices/counterSlice";


function Counter() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decriment())}>-</button>
      {counter}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => {dispatch(amountBy(2))}}>+2</button>
    </div>
  );
}

export default Counter;
