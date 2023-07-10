import Image from "next/image";
import product1 from "@/public/product1.png";
import product2 from "@/public/product2.png";
import product3 from "@/public/product3.png";

const Promotion = () => {
  return (
    <div>
      <div className="mt-32 mb-12 text-center  space-y-1">
        <p className="text-blue-700 flex justify-center font-semibold text-sm   tracking-wider  ">
          PRODUCTS
        </p>
        <h1 className="py-5 flex justify-center text-gray-800 text-3xl tracking-wider font-bold">
            Check What We Have
        </h1>
      </div>

      <div className="flex">
        <div><Image src={product1} alt="products"/></div>
        <div><Image src={product2} alt="products"/></div>
        <div><Image src={product3} alt="products"/></div>
      </div>



      </div>

  );
};

export default Promotion;
