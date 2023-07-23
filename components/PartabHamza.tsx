import { StaticImageData } from "next/image";
import ProductCard from "./ProductCard";
import { HamzaProductCard } from "./HamzaProductCard";

import { Products } from "./ProductDetails";




const PartabHamza = ({ }) => {
  const productChecks = Products.slice(0, 3);
 
  return (
    <div>
      <div className="mt-24 mb-12 text-center  space-y-1 md:py-9 md:px-32">
        <p className="text-blue-700 flex justify-center font-semibold text-sm   tracking-wider  ">
          PRODUCTS
        </p>
        <h1 className="py-5 flex justify-center text-gray-800 text-3xl tracking-wider font-bold">
          Check What We Have
        </h1>
      </div>

      <div className="flex">
        <div className="flex justify-evenly mt-0 md:py-9 md:px-32">
          {productChecks.map((product) => (
            <HamzaProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              img={product.image as StaticImageData}
              id={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartabHamza;
