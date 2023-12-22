"use client"

import { useState } from "react"

export default function Githubapp() {
    const [username, setUsername] = useState("");
    const [data, setdata] = useState('');
    const onclickhandler = async () => {
        let response = await fetch(`https://api.github.com/users/${username}`);
        response = await response.json()
        setdata(response);
        console.log(response);

    }
    return (
        <>
            <form className="max-w-md mx-auto mt-4">
                <div>
                    <h1 className="text-center text-lg py-6">Github App</h1>
                </div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Enter Name" onChange={(e) => setUsername(e.target.value)} />
            </form>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 my-3 px-4 rounded focus:outline-none focus:shadow-outline mx-auto flex justify-center" onClick={onclickhandler}>
                Search
            </button>
            <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Name</th>
          <th className="py-2 px-4 border-b">Bio</th>
          <th className="py-2 px-4 border-b">Followers</th>
          <th className="py-2 px-4 border-b">Image</th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-gray-100 transition ease-in-out duration-300">
          <td className="py-2 text-center px-4 border-b">{data.name}</td>
          <td className="py-2 text-center px-4 border-b">{data.bio}</td>
          <td className="py-2 text-center px-4 border-b">{data.followers}</td>
          <td className="py-2 text-center px-4 border-b">
            <img
              src={data.avatar_url}
              alt=""
              width={100}
              className="rounded-2xl"
            />
          </td>
        </tr>
      </tbody>
    </table>

        </>
    )
}
