// global function create
"use client"

import { useState } from "react"

// import { useState } from "react"

function Count() {
    // [
        //    not function is not rerandring  no update this function
    // var count=0;
    //  const Incrementhandler=()=>{
    //     count=count+1;
    //     console.log("count",count);
    //  }
    //  const decrementhandler=()=>{
    //     count=count-1;
    //     console.log("count",count);
    //  }
// ]
     const [count,setcount]=useState(0);
      const Incrementhandler=()=>{
        setcount(count+1)
        console.log("count",count);
      }
      const decrementhandler=()=>{
        setcount(count-1);
        console.log("count",count);
      }

    return (
        <>
            <button className="mx-4 p-2 border border-collapse rounded-lg border-cyan-500" onClick={Incrementhandler}>Increment</button>
            <span>{count}</span>
            <button  className="mx-4 p-2 border border-collapse rounded-lg border-cyan-500" onClick={decrementhandler}>Decrement</button>
        </>
    )
}

export default Count