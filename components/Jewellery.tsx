import React from "react";
import Image from "next/image";
import feature from '@/public/feature.webp'
import { Button } from "@/components/ui/button";

const Jewellery = () => {
  return (
    <div className="px-1 text-gray-700">
      <div className=" flex justify-start md:justify-end text-5xl font-bold py-4">
        <h6 className="max-w-[27rem]">
          Unique and Authentic Vintage Designer Jewellery
        </h6>
      </div>

      <div className="flex justify-between py-4 mt-2">
        <div className="relative basis-1/2 gap-10 grid grid-cols-2 grid-rows-2">
            <div className="aboslute -z-50 text-slate-200 inset-0">
                <h6 className="text-[7.3rem] leading-[5.9rem] font-bold ">Different from others</h6>
            </div>
          <div className="max-w-[13rem] space-y-2"> 
            <h6 className="font-semibold text-xl">
              Using Good Quality Materials
            </h6>
            <p className="text-lg leading-5 font-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="max-w-[13rem] space-y-2">
            <h6 className="font-semibold text-xl">
              Modern Fashion Design   
            </h6>
            <p className="text-lg leading-5 font-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="max-w-[13rem] space-y-2">
            <h6 className="font-semibold text-xl">
            100% Handmade Products    
            </h6>
            <p className="text-lg leading-5 font-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="max-w-[13rem] space-y-2">
            <h6 className="font-semibold text-xl">
              Discounts for Bulk Orders
            </h6>
            <p className="text-lg leading-5 font-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="basis-1/2 ">
            <div>
                <Image src={feature} alt="feature"/>
            </div>
            <div>
                <p>
                This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
                </p>
                <Button
          className=" rounded-none px-6 py-2 text-center bg-[#000000] text-white"
          type="submit"
        >
          See All Product
        </Button>
            </div>
            </div>
      </div>
    </div>
  );
};

export default Jewellery;
