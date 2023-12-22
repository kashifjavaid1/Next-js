"use client"

import { useState } from "react";

export default function page() {
    const [name,SetName]=useState('')
    const [data,setData]=useState('')
    const onhandler=async ()=>{
     let response=await fetch(`https://api.github.com/users/${name}`);
     response=await response.json();
     setData(response)

    }
    
  return (
   <>
    <h1>Github App</h1>
   <input type="text"placeholder="Enter Name " className="border border-red-400 ml-5" onChange={(e)=>SetName(e.target.value)} />
   
   <button onClick={onhandler}>Search</button>
   <h1 className="text-cyan-700 text-lg">Github user</h1>
   <label htmlFor="">Name</label>
   <h1>{data.name}</h1>
   <label htmlFor="">BIO</label>
   <h2>{data.bio}</h2>
   <label htmlFor="">Followers</label>
   <h2>{data.followers}</h2>
   <img src={data.avatar_url} alt="" />
 
   </>
  )
}
