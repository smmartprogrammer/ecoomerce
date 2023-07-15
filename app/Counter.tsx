"use client";

import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { counterAction } from "./store/slice/cartslice";
import { RootState } from "./store/store";



const Counter = () => {
  const counterValue = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch()
  
  const increment = () => {
    dispatch(counterAction.increment())
  };

  const decrement = () => {
    dispatch(counterAction.decrement())
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
