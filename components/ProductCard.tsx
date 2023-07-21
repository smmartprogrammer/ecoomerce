import Image, { StaticImageData } from "next/image";
import Link from "next/link";

function ProductCard(props: {
  title: string;
  price: number;
  img: StaticImageData;
  category?: string;
  gender?: string;
  _id?: string;
}) {
  return (
    <Link href={`/allproducts/${props.id}`}>
      <div className=" py-6  ">
        <Image src={props.img} alt="products" className="max-h-[300px]  " />
        <h3 className="font-bold text-lg mt-3 text-[#5A5A5A] py-1 ">
          {props.title}
        </h3>
        <p className="font-bold text-base text-[#888888] py-1 ">
          {props.category}
        </p>
        <p className="font-bold text-xl  py-1 "> ${props.price} </p>
      </div>
    </Link>
  );
}

export default ProductCard;
