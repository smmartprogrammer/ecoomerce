import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          <Hero />
          <Footer />
      
    </h1>
    </div>
   )
}
