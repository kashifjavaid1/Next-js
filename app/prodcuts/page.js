"use client"

import { useState } from "react";
import Githubapp from "../(compoents)/githubapp/githubapp";

export default function page() {
    const [data,setdata]=useState([])
    const clickhandler=async ()=>{
        
     let response=await fetch("https://dummyjson.com/products");
     response=await response.json();
     setdata(response.products);
     console.log(response.products);

    }
  return (
 <>
 <Githubapp/>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 
 <h1>Products</h1>
 <button onClick={clickhandler}>Show prodcut</button>
 {
    data?.map((item,index)=>{
        return (
            <div key={index}>
                <h1>id:{item.id}</h1>
                <h1>Title:{item.title}</h1>
                <h1>Description:{item.description}</h1>  
            </div>
        )
    })
 }
 </>
  )
}
