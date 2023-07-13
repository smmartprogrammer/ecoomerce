import { StaticImageData } from "next/image";
import ProductCard from "./ProductCard";
import { Products } from "./ProductDetails";

const Product = () => {
  const productChecks = Products.slice(0, 3);

  return (
    <div>
      <div className="mt-28 mb-12 text-center  space-y-1">
        <p className="text-blue-700 flex justify-center font-semibold text-sm   tracking-wider  ">
          PRODUCTS
        </p>
        <h1 className="py-5 flex justify-center text-gray-800 text-3xl tracking-wider font-bold">
          Check What We Have
        </h1>
      </div>

      <div className="flex">
        <div className="flex justify-evenly mt-2 ">
          {productChecks.map((product) => (
            <ProductCard
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

export default Product;
