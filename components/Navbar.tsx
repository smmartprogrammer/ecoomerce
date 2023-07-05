import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/Logo.webp";
import { ShoppingCart } from "lucide-react";
import { Search } from "lucide-react";
import { NavbarArray } from "./Types";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {


  return (
    <div className="flex justify-between items-center py-8 ">
      <div>
        <Image src={Logo} alt="logo" className="w-36" />
      </div>
      
      <ul className="md:flex md:shrink-0 md:space-x-12 md:font-sm md:text-md sm:flex sm:items-center sm:hidden ">
        {/* flex shrink-0 space-x-12 font-sm text-md sm:hidden */}
        {NavbarArray.map((NavbarArray) => (
          <li>
            <Link href={NavbarArray.href}>{NavbarArray.label}</Link>
          </li>
        ))}
      </ul>
      <div className="border flex items-center text-gray-900 px-3 rounded-md sm:hidden md:border md:flex md:items-center md:text-gray-900 md:px-3 md:rounded-md ">
        <Search className="w-4 h-4 pl-0" />
        <input
          type="search"
          className="pl-1 pr-5 py-1 w-72 text-black text-sm"
          placeholder="What you looking for "
        />
      </div>
      <div className="sm:hidden md:relative md:w-11 md:h-11  md:rounded-full md:bg-gray-200 md:flex md:justify-center md:items-center">
        <div className="w-4 h-4 absolute top-1 right-2 bg-red-400 text-xs font-light rounded-full flex justify-center items-center ">
          0
        </div>
        <ShoppingCart className="h-6 w-7" />
      </div>
      <MobileNavbar />
    </div>
  );
};

export default Navbar;
