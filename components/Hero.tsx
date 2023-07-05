import Image from "next/image";
import hero from "@/public/hero.webp";
import bazar from "@/public/bazar.webp";
import bustle from "@/public/bustle.webp";
import instyle from "@/public/instyle.webp";
import versace from "@/public/versace.webp";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex">
      <div className="md:flex">
        <div className="mt-16">
          <Badge className="rounded bg-gray-200 text-blue-700 py-1 px-6 text-lg ">
            Sale 70%
          </Badge>
          <div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-10 text-[#212121] ">
              An Industrial Take on Streetwear
            </h1>
            <p className="mt-6 font-extralight text-[#976866] text-base ">
              Anyone can beat you but no one can beat your outfit as long as you
              wear Dine outfits.
            </p>
            <div className="mt-8 ">
              <Button className="bg-[#212121] text-[#ffff] text-lg py-9 gap-x-2 px-6">
                <ShoppingCart className="h-5 w-6" />
                <p className=" leading-tight  ">
                  Start
                  <br />
                  Shopping
                </p>
              </Button>
              <div className="mt-10 flex gap-4 w-28 ">
                <Image src={bazar} alt="bazar" />
                <Image src={bustle} alt="bustle" />
                <Image src={versace} alt="versace" />
                <Image src={instyle} alt="instyle" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:relative md:flex">
        <div className="md:absolute md:h-96 md:w-96 md:rounded-full md:bg-[#FFECE3]   ">
          <div className="">
            <Image src={hero} alt="heroimage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
