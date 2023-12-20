"use client"
import { useState } from "react";

export default function Fetch() {
  const [data, setData] = useState([]);

  const handler = async () => {
    let response = await fetch("https://dummyjson.com/products");
    response = await response.json();
    setData(response.products);
    console.log(response);
  };

  return (
    <>
      <button onClick={handler}>Data button</button>
      <h1>fetch</h1>

      {data?.map((item, index) => {
        return (
          <div key={index}>
            <h1>ID:{item.id}</h1>
            <h1>title: {item.title}</h1> {/* Corrected typo here */}
          </div>
        );
      })}
    </>
  );
}
