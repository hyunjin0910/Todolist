import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, add } from "../features/counter/counterSlice";

export const Test = () => {
  // reducer에서 꺼내온 state
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
      <input />
      <p>{count}</p>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
      <button onClick={() => dispatch(add(3))}>add</button>
    </>
  );
};
