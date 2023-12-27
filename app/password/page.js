"use client"
import { useCallback, useEffect, useState } from "react"

export default function page() {
    const [length,setLength]=useState(8)
    const [number,setNumber]=useState(false);
    const [character,setCharacter]=useState(false);
    const [password,setPassword]=useState("");

    const passwordgGan=useCallback(()=>{
        let pass=""
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (number) str +="0123456789";
        if (character) str +="!@#$%^&*-_+=[]{}~`"
        for (let i = 0; i <=length; i++) {
            let char=Math.floor(Math.random()*str.length+1)
            pass+=str.charAt(char)
        }
        setPassword(pass)
    },[length,number,character,setPassword])
    useEffect(()=>{
passwordgGan()
    },[length,number,character])
  return (
 <>
<div className="py-4 bg-black w-full max-w-md rounded-3xl shadow-2xl mx-auto my-7">
  <div>
    <h1 className="text-center text-white">Password Generator</h1>
  </div>
  <div className="text-white">
    <input
      type="text"
      className="w-[80%] ml-2 px-2 py-1 mt-4 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-800 text-white"
      placeholder="Enter your password"
      readOnly
      value={password}
    />
   <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue">
  Copy
</button>
  </div>
  <div className="flex items-center py-3">
    <input type="range" 
    value={length}
    min={8}
    max={50}
    onChange={(e)=>setLength(e.target.value)}
    className='cursor-pointer py-1 ml-2'/>
    <label className="text-white  ml-2 ">Length:{length}</label>
    {/*  */}
      <input type="checkbox" 
      className="ml-2"
      defaultChecked={number}
      onChange={() => {
        setNumber((prev) => !prev )
    }}
       />
       <label className="text-white">Number</label>
       {/*  */}
       <input type="checkbox" 
       className="ml-2"
       defaultChecked={character}
       onChange={() => {
        setCharacter((prev) => !prev )
    }}
       />
       <label className="text-white">Character</label>
  </div>
  
</div>

  </>
  )
}
