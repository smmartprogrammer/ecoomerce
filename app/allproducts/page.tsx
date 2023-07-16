
import ProductCard from "@/components/ProductCard";
// import { Products } from "@/components/ProductDetails";
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

// interface Product {
//   id: string;
//   name: string;
//   title:string;
//   price: number;
//   image: string | StaticImageData;
//   category: string;
//   gender?: string;
//   href?: string;
// }

const AllProducts = async () => {
  const data: Product[] = await getProductData();

  return (
    <div className="flex">
      <div className="flex justify-between flex-wrap mt-0 px-10 py-15   ">
        {data.map((item) => (
          <div>
            
          {/* <img key={item.key } src={urlForImage(item.image.asset ).url()}  alt="product"} /> */}
            <ProductCard
              key={item.id}
              title={item.title}
              price={item.price}
              IImage= {urlForImage(item.image)}
              category={item.category}
              id={item.id}
            />
          </div>
        ))}

        {/* {Products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          img={product.image as StaticImageData}
          category={product.category }
          id={product.id}
        />
      ))} */}
      </div>
    </div>
  );
};

export default AllProducts;
