"use client"
import { useEffect, useState } from "react"

function useCurrency(currency) {
    const [data,setData]=useState({})
 useEffect(()=>{
    let response=fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    response=response.json()
    setData(response.currency)
    console.log(data);
 },[currency])
 
 return data;
}

export default useCurrency;