import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Jewellery from "@/components/Jewellery";
import Newsletter from "@/components/Newsletter";
import Products from "@/components/Product";
import Promotion from "@/components/Promotion";
// import { client } from "@/sanity/lib/client";

// export const getServerSideProps = async () => {
//   const query = `*[_type =="product"]`;
//   const sanityProduct = await client.fetch(query);

//   return {
//     props: { sanityProduct },
//   };
// };

export default async function Home({  }) {
  // const data = await getProductData();
  // console.log(data);

  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        <Hero />
        <Promotion />
        <Products />
        <Jewellery />
        <Newsletter />
        <Footer />
      </h1>
    </div>
  );
}
