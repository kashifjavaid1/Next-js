"use client"
import useCurrency from "./(hooks)/hooks"
export default function page() {
  return (
    <>
    <button>click</button>
    <h1 className="py-4 text-center text-4xl  ">Currency app</h1>
    <useCurrency/>
    </>
  )
}
