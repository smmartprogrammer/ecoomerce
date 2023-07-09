import Image from 'next/image'
import promo1 from '@/public/promo1.webp'
import promo2 from '@/public/promo2.webp'
import promo3 from '@/public/promo3.webp'

const Promotion = () => {
  return (
    <div className='mt-20'>
        <h4 className='text-blue-600 flex justify-center font-semibold text-sm   tracking-wider  '>PROMOTIONS</h4>
        <h1 className='py-5 flex justify-center text-gray-800 text-3xl tracking-wider font-bold'>Our Promotions Events</h1>

        <div>
            <div className='h-55 w-1/2 rounded-none bg-[#D6D6D8] '>
                <div>
                <h2 className='pt-5 px-4'>GET UPTO 60% </h2><h2 className='font-light text-lg'>For the summer season </h2> 
                
                </div>
                </div>
                <div>
                <Image src={promo1} alt=''/>
                </div>
                
                
            <div className='m-4 h-55 w-1/2 rounded-none bg-[#212121] '>
                <h1 className='text-white pt-12 font-bold text-4xl tracking-wide flex justify-center '>GET 30% OFF</h1>
                <h3 className='text-white text-sm pt-3 font-light flex justify-center'>USE PROMO CODE</h3>
                <button className= 'flex justify-center  bg-[#474747] text-white px-10 py-2 text-lg tracking-wider font-medium rounded-md '>DINEWEEKENDSALE</button> </div>
        </div>

        <div>
        <div><Image src={promo2} alt=''/> </div>
        <div><Image src={promo3} alt=''/> </div>
        </div>


    </div>
  )
}

export default Promotion
