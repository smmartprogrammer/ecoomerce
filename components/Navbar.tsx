import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/Logo.webp";
import { ShoppingCart } from "lucide-react";
import { Search } from "lucide-react";
import { AlignRight } from "lucide-react";
import { X } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-8 ">
      <div className="">
        <Image src={Logo} alt="logo" className="w-36" />
      </div>
        <ul className="  flex space-x-12 font-sm text-md">
          <Link href="#">
            <li>Female</li>
          </Link>
          <Link href="#">
            <li>Male</li>
          </Link>
          <Link href="#">
            <li>Kids</li>
          </Link>
          <Link href="#">
            <li>All Products</li>
          </Link>
        </ul>
        <div className="border flex items-center text-gray-900 px-3 rounded-md">
          <Search className="w-4 h-4" />
          <input
            type="text"
            className="pl-1 pr-5 py-0 w-80 text-black text-sm "
            placeholder="What you looking for "
          />
      </div>
      <div className="relative w-11 h-11  rounded-full bg-gray-200 flex justify-center items-center">
        <div className="w-4 h-4 absolute top-1 right-2 bg-red-400 text-xs font-light rounded-full flex justify-center items-center ">
          0
        </div>
        <ShoppingCart className="h-6 w-7" />
      </div>
      <div className="flex lg:hidden">
        <AlignRight />
      </div>
      <div className="flex lg:hidden">
        <X />
      </div>
    </div>
  );
};

export default Navbar;
