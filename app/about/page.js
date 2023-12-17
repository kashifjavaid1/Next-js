"use client"
import { useState } from "react";

export default function About() {
  const [count, setcount] = useState(0);

  const incrementhandler = () => {
    setcount(count + 1);
    console.log(setcount);
  };

  const decrementhandler = () => {
    if (count > 0) {
      setcount(count - 1);
      console.log(setcount);
    }
  };

  return (
    <>
     
        <div className="px-12 py-5 flex gap-2">
          <button onClick={incrementhandler}>Increment</button>
          <span>{count}</span>
          <button onClick={decrementhandler}>Decrement</button>
          { count>0 &&
          <button onClick={() => setcount(0)}>Reset</button>
}
        </div>
  
      
      
    </>
  );
}

