"use client"
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import React from "react";
import Image from "next/image";
import Logo from "@/public/Logo.webp";
import { ShoppingCart } from "lucide-react";
import { Search } from "lucide-react";
import { NavbarArray } from "./Types";
import Link from "next/link";
import { AlignRight } from "lucide-react";
import { X } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/public/Logo.webp";

const Hamzanav = () => {
  const cartValue = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );




  return (
    <div className="flex wrapper justify-between py-10">
      <Link href="/">
      <div>
        <Image src={Logo} alt="LOGO" />{" "}
      </div>
      </Link>
      <div>
        <ul className="md:flex md:justify-between md:items-center gap-x-5 md:block sm:hidden ">
          {NavbarArray.map((NavbarArray) => (
            <li className="font-normal text-base text-gray-700 ">
              {/* <Link href={NavbarArray.href}>{NavbarArray.label}</Link> */}
              <Link key={NavbarArray.href} href={NavbarArray.href}>{NavbarArray.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className=" border flex items-center   text-gray-900 px-3 rounded-md sm:hidden md:border md:flex md:items-center md:text-gray-900 md:px-3 md:rounded-md ">
          <Search className="w-4 h-4 pl-0" />
          <input
            type="search"
            className="pl-1 pr-5 py-1 w-72 text-sm font-light   "
            placeholder="What you looking for "
          />
        </div>
      </div>
      <div className="h-10 w-10 relative rounded-full bg-gray-200 md:flex justify-center items-center sm:hidden md:block   ">
      <span className="h-4 w-4 absolute top-1 right-2 rounded-full bg-red-300 text-sm flex justify-center items-center  font-semibold">
          {cartValue}
        </span>
        <ShoppingCart />
      </div>
      <Sheet>
        <SheetTrigger className="md:hidden ">
          <AlignRight />
        </SheetTrigger>
        <SheetContent className="w-full ">
          <div className="flex justify-center ">
            <div className="h-10 w-10 relative rounded-full bg-gray-200 flex justify-center items-center   ">
        <span className="h-4 w-4 absolute top-1 right-2 rounded-full bg-red-300 text-sm flex justify-center items-center font-light">
          {cartValue}
        </span>
        <ShoppingCart />
      </div>
</div>
<div>
            <ul className="flex flex-col items-center gap-y-3   ">
              {NavbarArray.map((NavbarArray) => (
                <li className="font-normal text-base text-gray-700 ">
                  {/* <Link href={NavbarArray.href}>{NavbarArray.label}</Link> */}
                  <Link key={NavbarArray.href} href={NavbarArray.href}>{NavbarArray.label}</Link>
                </li>
              ))}
            </ul>
          </div>{" "}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Hamzanav;
