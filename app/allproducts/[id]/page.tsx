"use client"

import ProductCard from "@/components/ProductCard";
import { Products } from "@/components/ProductDetails";
import { ShoppingCart } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
// import Counter from "@/app/Counter";

const getProductbyDetail = (id: string) => {
  return Products.filter((product) => product.id === id);
};

export default function Page({ params }: { params: { id: string } }) {
  const result = getProductbyDetail(params.id);


  return (
    <div className="flex  mt-0 px-10 py-15 flex-wrap">
      {result.map((product) => (
        <div key={product.id} className="flex justify-between gap-6">
          <div>
            <Image src={product.image} alt={product.name} />
          </div>
          <div>
            {" "}
            <p className="text-3xl font-normal"> {product.title} </p>
            <p className="text-xl font-semibold  text-[#B0B0B0]">
              {" "}
              {product.category}{" "}
            </p>
            <p className="mt-10 text-sm font-bold tracking-widest   ">
              {" "}
              SELECT SIZE{" "}
            </p>
            <div className="mt-3 space-x-4">
              <button className="  h-11 w-11 rounded-full  hover:bg-white hover:border-spacing-5  hover:drop-shadow-2xl font-bold  text-[#666666]">
                XS
              </button>
              <button className="  h-11 w-11 rounded-full  hover:bg-white hover:border-spacing-5  hover:drop-shadow-2xl font-bold  text-[#666666]">
                S
              </button>
              <button className="  h-11 w-11 rounded-full  hover:bg-white hover:border-spacing-5  hover:drop-shadow-2xl font-bold  text-[#666666]">
                M
              </button>
              <button className="  h-11 w-11 rounded-full  hover:bg-white hover:border-spacing-5  hover:drop-shadow-2xl font-bold  text-[#666666]">
                L
              </button>
              <button className="  h-11 w-11 rounded-full  hover:bg-white hover:border-spacing-5  hover:drop-shadow-2xl font-bold  text-[#666666]">
                XL
              </button>
            </div>
            <div className="flex mt-10 space-x-8  items-center">
              
            <p className="text-base font-bold tracking-widest">Quantity:</p>
      <div className="space-x-2">
        <button  className="h-9 w-9 rounded-full bg-[#F1F1F1] text-2xl ">
          -
        </button>
        {0}
        <button
          
          className="h-9 w-9 rounded-full border-solid   text-2xl border-2 border-black"
        >
          +
        </button>
      </div>
            
            </div>
          </div>
          <div className="flex mt-8 space-x-2 items-center">
            <Button className="bg-black text-white font-bold px-6  ">
              <ShoppingCart className="mr-2 h-4 w-4 text-xl font-bold " /> Add
              to Cart
            </Button>
            <p className="text-2xl font-bold"> ${product.price}.00</p>
          </div>
        </div>
        // </div>
      ))}
      <div></div>
      {/* <div className="">Overview Information</div> */}
    </div>
  );
}
