import React from "react";
import Product1 from "@/public/product1.png";
import Product2 from "@/public/product2.png";
import Product3 from "@/public/product3.png";
import Product4 from "@/public/product4.png";
import Product5 from "@/public/product5.png";
import Product6 from "@/public/product6.png";
import Product7 from "@/public/product7.png";
import Product8 from "@/public/product8.png";
import Product9 from "@/public/product9.png";
import Image from "next/image";

const AllProducts = () => {
  return (
    <div className="flex justify-evently">
      <div className="flex flex-col px-2 justify-center items-start">
        <div className="h-25 w-25 bg-[#D7D7D9]  ">
          <Image src={Product1} alt="product1" />
        </div>
        <div className="py-3">
          <h2 className="font-medium text-base  ">Brushed Raglan SweatShirt</h2>
          <p className="font-medium text-base text-[#8F918F] ">Sweater</p>
          <h2 className="font-bold text-base ">$195</h2>
        </div>
      </div>

      <div className="flex flex-col px-2 justify-center  items-start">
        <div className="h-25 w-25 bg-[#D7D7D9]  ">
          <Image src={Product1} alt="product1" />
        </div>
        <div className="py-3">
          <h2 className="font-medium text-base  ">Brushed Raglan SweatShirt</h2>
          <p className="font-medium text-base text-[#8F918F] ">Sweater</p>
          <h2 className="font-bold text-base ">$195</h2>
        </div>
      </div>

      <div className="flex flex-col px-2 justify-center  items-startr">
        <div className="h-25 w-25 bg-[#D7D7D9]  ">
          <Image src={Product1} alt="product1" />
        </div>
        <div className="py-3">
          <h2 className="font-medium text-base  ">Brushed Raglan SweatShirt</h2>
          <p className="font-medium text-base text-[#8F918F] ">Sweater</p>
          <h2 className="font-bold text-base ">$195</h2>
        </div>
      </div>

      <div className="flex flex-col px-2 justify-center  items-start">
        <div className="h-25 w-25 bg-[#D7D7D9]  ">
          <Image src={Product1} alt="product1" />
        </div>
        <div className="py-3">
          <h2 className="font-medium text-base  ">Brushed Raglan SweatShirt</h2>
          <p className="font-medium text-base text-[#8F918F] ">Sweater</p>
          <h2 className="font-bold text-base ">$195</h2>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
