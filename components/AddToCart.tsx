"use client";
import { useDispatch } from "react-redux";
import React from "react";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { cartActions } from "@/app/store/slice/cartSlice";
import  toast from 'react-hot-toast';



const AddToCart = () => {
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(cartActions.addToCart({ quantity: 1 }));
    toast.success('Product Added Successfully!');
  };
  return (
    <div className="flex mt-8 space-x-2 items-center">
      <Button
        onClick={ addItem }
        className="bg-black text-white font-bold px-6"
      >
        <ShoppingCart className="mr-2 h-4 w-4 text-xl font-bold " /> Add to Cart
      </Button>
      {/* <p className="text-2xl font-bold"> ${product.price}.00</p> */}
    </div>
  );
};

export default AddToCart;
