import ProductCard from "@/components/ProductCard";
import { Products } from "@/components/ProductDetails";
import Image, { StaticImageData } from "next/image";

const getProductbyDetail = (id: string) => {
  return Products.filter((product) => product.id === id);
};

export default function Page({ params }: { params: { id: string } }) {
  const result = getProductbyDetail(params.id);

  return (
    <div className="flex  mt-0 px-10 py-15 flex-wrap">
      {result.map((product) => (
        <div key={product.id} className="flex justify-between gap-6">
          <div>
            <Image src={product.image} alt={product.name} />
          </div>
          <div>
            {" "}
            Product Detail
            <p>Name {product.name} </p>
            <p>Price {product.price} </p>
            <p>Category {product.category} </p>
          </div>
        </div>
      ))}
    </div>
  );
}
