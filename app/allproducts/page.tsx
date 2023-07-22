import { StaticImageData } from "next/image";
import { client } from "@/sanity/lib/client";
import { Product } from "@/components/Types";
import { urlForImage } from "@/sanity/lib/image";
import { Image as IImage } from "sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { HamzaProductCard } from "@/components/HamzaProductCard";



export const getProductData = async () => {
  const res = await client.fetch(`*[_type =="product" ]{
  price,
  _id,
  title,
  name,
  gender,
  category,
  image,
}`);
  return res;
};


const AllProducts = async () => {
  const data: Product[] = await getProductData();


  return (
    <div className="grid grid-cols-[repeat(4, auto)] justify-center space-x-6 ">
      {/* <div className="flex  sm:px-16 md:px-2 md:py-0.5 py-8"> */}
      <div className="flex justify-between flex-wrap mt-0 px-10 py-15 object-cover object-top max-h-[200]  ">
        {data.map((item) => (
          <div>
            <HamzaProductCard item={item} />
          </div>
        ))}

      </div>
    </div>
  );
};

export default AllProducts;
