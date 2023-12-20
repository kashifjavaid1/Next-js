import Link from 'next/link'
import Fecth from './(compoents)/datafecth/datafecth'

export default function Home() {
  return (
    <>
    <Link href={"/condation"}>Condition page</Link>
    <br></br>
       <Fecth/>
   {/* <h1 className='text-center py-6'>Home page</h1>

   <Header title="First Compoents" sorce="next.svg"/>
   <Header title="Second Compoents" sorce="vercel.svg"/>
   <Header title="second"/> */}
   </>
  )
}
