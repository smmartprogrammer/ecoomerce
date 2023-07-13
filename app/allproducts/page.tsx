import ProductCard from '@/components/ProductCard'
import {Products} from '@/components/ProductDetails'
import { StaticImageData } from 'next/image'



const AllProducts = () => {
  return (
    <div className="flex">
    <div className="flex justify-between flex-wrap mt-0 px-10 py-15   ">
      {Products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          img={product.image as StaticImageData}
          category={product.category }
          id={product.id}
        />
      ))}
    </div>
  </div>

  )
}

export default AllProducts
