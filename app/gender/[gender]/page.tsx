import ProductCard from "@/components/ProductCard";
import { Products } from "@/components/ProductDetails";
import { StaticImageData } from "next/image";

const getProductbyCategory = (gender: string) => {
  return Products.filter((product) => product.gender === gender);
};

export default function Page({ params }: { params: { gender: string } }) {
  const result = getProductbyCategory(params.gender);
  return (
    <div className="flex justify-between mt-0 px-10 py-15 flex-wrap">
      {result.length > 0 ? (
        result.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            img={product.image as StaticImageData}
            gender={product.gender as string}
            id={product.id }
          />
        ))
      ) : (
        <p className="text-center"> Product not found </p>
      )}
    </div>
  );
}
