import Link from "next/link";

export default function Responsive() {
  return (
    <>
      <div className="flex justify-between text-white m-0 bg-slate-600">
        <div>
          <span>Logo</span>
        </div>
        <div className="py-2">
          <ul className="flex" >
           <Link href='/'><li>Home</li></Link>
           <Link href='/'><li>About</li></Link>
           <Link href='/'><li>Contact</li></Link>

          </ul>
        </div>
        <div>
          <span>
            <button>click</button>
          <button>Login</button>
          <button>Sign In</button>
          </span>


        </div>
      </div>
    </>
  )
}
