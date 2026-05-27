import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incCounter } from "../actions/actions";

const Counter = () => {
  // to access central storage state
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  const handleInc = () => {
    // dispatch action from here
    dispatch(incCounter());
  };

  const handleDec = () => {
    dispatch(decCounter());
  };

  return (
    <>
      <button onClick={handleDec}>-</button>
      <p>{count}</p>
      <button onClick={handleInc}>+</button>
    </>
  );
};

export default Counter;
