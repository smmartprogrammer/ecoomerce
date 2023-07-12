import Image, { StaticImageData } from "next/image";

function ProductCard(props: {
  title: string;
  price: number;
  img: StaticImageData;
}) {
  return (
    <div className="">
      <Image src={props.img} alt="products" />
      <h3 className="font-bold text-lg mt-3">{props.title} </h3>
      <p className="font-bold text-lg"> ${props.price} </p>
    </div>
  );
}

export default ProductCard;
