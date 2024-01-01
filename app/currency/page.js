"use client"
import useCurrency from "./(hooks)/hooks"
export default function page() {
  return (
    <>
    <h1>Hooks</h1>
    <button>click</button>
    <h1 className="py-4 text-center text-4xl  ">Currency app</h1>
    <useCurrency/>
    </>
  )
}
