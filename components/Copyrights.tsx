import React from 'react'

const Copyrights = () => {
  return (
    <div className='md:mt-40 md:mb-6 md:flex md:justify-between md:border-spacing-1 sm:py-4 border-t border-gray-500'>
        <div className='sm:py-3 md:flex justify-between'>
            <p className='text-gray-500 font-medium flex justify-center items-center '>Copyright &copy; 2022 Dine   Market </p>
        </div>
        <div className='sm:py-3 '><p className='text-gray-500 font-medium flex justify-center items-center'>Design by.<span className='font-bold text-black'>Weird Design Studio</span>  </p></div>
        <div className='sm:py-3 md:flex justify-evenly'><p className='text-gray-500 font-medium flex justify-center items-center'>Code by.<span className='font-bold text-black'>partabraj on github</span>  </p></div>

    </div>
  )
}

export default Copyrights
