import Image, { StaticImageData } from "next/image";

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
  gender: string;
  href?: string;
}

export const NavbarArray: Array<NavbarItemTypes> = [
  { label: "Female", href: "/Female" },
  { label: "Male", href: "/Male" },
  { label: "Kids", href: "/Kids" },
  { label: "All Products", href: "/AllProducts" },
];

export const ProductsList = [];
