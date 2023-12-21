"use client"
import { useState } from "react"


export default function Form() {
    const [name,setName]=useState('')
    const [phone,setPhone]=useState();
  return (
   <>
   <form>
Name:<input className="pl-2 border border-red-400" type="text" placeholder="Enter Name"  onChange={(e)=>setName(e.target.value)}/> <br />
Phone Number: <input  className="pl-2 my-2 border border-red-400"  type="number" placeholder="number" onChange={(e)=>setPhone(e.target.value)} />
   </form>
   <br />
   <span>Name:{name}</span>
   <h1>Phone:{phone}</h1>
   </>
  )
}
