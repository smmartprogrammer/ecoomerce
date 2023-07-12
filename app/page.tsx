import AllProducts from "@/components/AllProducts";
import Footer from "@/components/Footer";
import Hamzanav from "@/components/Hamzanav";
import Hero from "@/components/Hero";
import Jewellery from "@/components/Jewellery";
import Newsletter from "@/components/Newsletter";
import Products from "@/components/Product";
import ProductList from "@/components/ProductList";
import Promotion from "@/components/Promotion";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        <Hero />
        <Promotion />
        <Products />
        <Jewellery />
        <Newsletter />
        <AllProducts />
        <ProductList />
        <Footer />
      </h1>
    </div>
  );
}
