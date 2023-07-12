"use client"
import Image from "next/image";
import hero from "@/public/hero.webp";
import bazar from "@/public/bazar.webp";
import bustle from "@/public/bustle.webp";
import instyle from "@/public/instyle.webp";
import versace from "@/public/versace.webp";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import AllProducts from "./AllProducts";

const Hero = () => {
  return (
    <div className="flex justify-center items-center wrapper">
      <div className="lg:w-[45%] mt-16 border-3 border-black">
        <Badge className="rounded bg-gray-200 text-blue-700 py-1 px-6 text-lg ">
          Sale 70%
        </Badge>
        <h1 className="tracking-wide scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl mt-10 text-[#212121] ">
          An Industrial Take on Streetwear
        </h1>
        <p className=" w-[70%] tracking-wide mt-6 font-semibold	text-[#9C9E9C] text-base ">
          Anyone can beat you but no one can beat
          your outfit as long as you wear Dine outfits.
        </p>
        {/* <Link href={AllProducts}> */}
        <Button className="mt-8 bg-[#212121] text-[#ffff] text-lg py-9 gap-x-2 px-6">
          <ShoppingCart className="h-5 w-6" />
          
          <p className=" leading-tight  ">
            Start
            <br />
            Shopping
          </p>
        </Button>
        {/* </Link> */}
        <div className="mt-10 flex gap-4 w-28">
          <Image src={bazar} alt="bazar"/>
          <Image src={bustle} alt="bustle"/>
          <Image src={versace} alt="versace"/>
          <Image src={instyle} alt="instyle"/>
        </div>
      </div>

      {/* image container */}

      <div className="hidden md:block ml-32 border-1 border-blue">
        <div className="rounded-full bg-[#FFECE3]">
          <Image src={hero} alt="heroimage"/>
        </div>
      </div>





    </div>


  );
};

export default Hero;
