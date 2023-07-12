import React from "react";
import ProductCard from "./ProductCard";
import { Products } from "./ProductDetails";

const ProductList = () => {
  const productChecks = Products.slice(0, 3);

  return (
    <div className="flex justify-evenly mt-16">
      {productChecks.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          img={product.image}
        />
      ))}
    </div>
  );
};

export default ProductList;
