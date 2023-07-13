import Image, { StaticImageData } from "next/image";
import Link from "next/link";


export interface NavbarItemTypes {
  label: string;
  href: string;
}

export interface Product {
  id: string;
  name: string;
  title:string;
  price: number;
  image: string | StaticImageData;
  category: string;
  gender?: string;
  href?: string;
}

export const NavbarArray: Array<NavbarItemTypes> = [
  { label: "Female", href: "/gender/female" },
  { label: "Male", href: "/gender/male" },
  { label: "Kids", href: "/gender/kids" },
  { label: "All Products", href: "/allproducts" },
];

export const ProductsList = [];
