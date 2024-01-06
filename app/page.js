// import Link from 'next/link'
// import Fecth from './(compoents)/datafecth/datafecth'
// import Form from './(compoents)/form/Form'
import Card from './(compoents)/card/card'
import Responsive from './(compoents)/responsive/Responsive'
export default function Home() {
  return (
    <>
    {/* <Link href={"/condation"}>Condition page</Link>
    <br></br>
    <Link href={"/github"}>Github</Link>
    <br></br>
       <Fecth/> */}
    <br></br>
  {/* <Form/> */}
   {/* <h1 className='text-center py-6'>Home page</h1>

   <Header title="First Compoents" sorce="next.svg"/>
   <Header title="Second Compoents" sorce="vercel.svg"/>
   <Header title="second"/> */}

   {/* <div className=' mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4 md:mx-auto lg:gap-4  '>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   </div> */}
   <Responsive/>
   </>
  )
}
