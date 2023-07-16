"use client";

import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "./store/store";
import { counterActions } from "./store/slice/cartSlice";



const Counter = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector((state: RootState) => state.counterSlice.value );

  
  const increment = () => {
    dispatch(counterActions.increment())
  };

  const decrement = () => {
    dispatch(counterActions.decrement())
  };

  return (
    <div>
      <p className="text-base font-bold tracking-widest">Quantity:</p>
      <div className="space-x-2">
        <button onClick={decrement} className="h-9 w-9 rounded-full bg-[#F1F1F1] text-2xl ">
          -
        </button>
        {counterValue}
        <button
          onClick={increment}
          className="h-9 w-9 rounded-full border-solid   text-2xl border-2 border-black"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
