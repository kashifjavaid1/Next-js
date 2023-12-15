import Image from 'next/image'
import Header from './(compoents)/header/Header'

export default function Home() {
  return (
    <>
   <h1 className='text-center py-6'>Home page</h1>

   <Header title="First Compoents" sorce="next.svg"/>
   <Header title="Second Compoents" sorce="vercel.svg"/>
   <Header title="second"/>
   </>
  )
}
