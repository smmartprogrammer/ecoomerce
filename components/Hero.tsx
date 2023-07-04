import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const Hero = () => {
  return (
    <div>
      <div>
        <div>
          <Badge className="rounded bg-gray-200 text-blue-700 py-1 px-5 text-lg ">
            Sale 70%
          </Badge>
          <div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              An Industrial Take on Streetwear
            </h1>
            <p className="mt-6 font-extralight text-[#666666] text-base ">
              Anyone can beat you but no one can beat your outfit as long as you
              wear Dine outfits.
            </p>
            <div className="mt-8 ">
              <Button className="bg-[#212121] text-[#ffff] text-lg py-9 gap-x-2 px-4">
                <ShoppingCart className="h-5 w-6" />
                <p className="">
                  Start 
                  <br />
                  Shopping
                </p>
              </Button>
            </div>
            
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
