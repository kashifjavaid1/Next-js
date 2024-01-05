import Image from 'next/image'
import React from 'react'

export default function Card() {
  return (
    <div className='sm:w-full sm:mx-auto hover:bg-yellow-500 md:hover:bg-green-700 lg:mx-4 h-29 md:w-80 lg:w-64   max-w-sm bg-red-500 shadow-lg h-30  ml-2 rounded-3xl p-6 mt-3'>
        <div className=''>
            <div>
            <Image className='cursor-pointer text-white' src='next.svg' width={150} height={40}/>
            </div>
            <div className='py-3 '>
                <p className='ml-2 py-1 text-white cursor-pointer hover:text-purple-800  '>Price:500</p>
                <button className='bg-black text-white rounded-xl p-2 hover:bg-purple-900 hover:text-white'>Buy Now</button>
            </div>
        </div>
    </div>
  )
}
