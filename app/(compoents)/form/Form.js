"use client"
import { useState } from "react"


export default function Form() {
    const [name,setName]=useState('')
    const [fahtername,setfatherName]=useState('')
    const [phone,setPhone]=useState();
    const [email,setEmail]=useState();
  return (
   <>
   <form>
Name:<input className="pl-2 border border-red-400" type="text" placeholder="Enter Name"  onChange={(e)=>setName(e.target.value)}/> <br />
Phone Number: <input  className="pl-2 my-2 border border-red-400"  type="number" placeholder="number" onChange={(e)=>setPhone(e.target.value)} />
FatherName:<input className="pl-2 border border-red-400" type="text" placeholder="Enter Father Name"  onChange={(e)=>setfatherName(e.target.value)}/>
 <br />


Phone Number: <input  className="pl-2 my-2 border border-red-400"  type="number" placeholder="number" onChange={(e)=>setPhone(e.target.value)} />

Email: <input  className="pl-2 my-2 border border-red-400"  type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
   </form>
   <br />
   <span>Name:{name}</span>
   <span>Father Name:{fahtername}</span>
   <h1>Phone:{phone}</h1>
   <h1>Email:{email}</h1>
   </>
  )
}
