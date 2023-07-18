import { StaticImageData } from "next/image";
import { client } from "@/sanity/lib/client";
import { Product } from "@/components/Types";
import { urlForImage } from "@/sanity/lib/image";
import { Image as IImage } from "sanity";
import Image from "next/image";

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
    <div className="flex  sm:px-16 md:px-2 md:py-0.5 py-8">
      <div className="flex justify-between flex-wrap mt-0 px-10 py-15 object-cover object-top max-h-[200]  ">
        {data.map((item) => (
          <div>
            <Image src={urlForImage(item.image).url()} width={250} height={200} alt="productimage" />
            <h3 className="font-bold text-lg mt-3 text-[#212121] py-1 ">{item.title} </h3>
            <p className="font-bold text-base text-[#888888] py-1 ">{item.category} </p>
            <p className="font-bold text-xl  py-1 text-[#212121] "> ${item.price} </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default AllProducts;
