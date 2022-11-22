'use client'

import { useState } from "react"
import Link from "next/link"

export default function Home() {
  const [details, setDetails] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
  })

    // handle Login
    const handleLogin = (e) => {
      const {name, value} = e.target
      setDetails((prev) => {
          return {...prev, [name]: value}
      })
  }
  // Submit
  const handleSubmit = (e) => {
      e.preventDefault()
  }

  return (
      <div className="w-full h-screen items-center justify-center flex flex-col shadow-xl drop-shadow-md bg-orange-400">
          <form className="border-transparent  w-[30%] min-w-[300px] h-[60%] mx-auto flex flex-col p-6 pt-12 rounded-l-[25%] rounded-r-md items-center justify-between shadow-lg bg-gray-100" onSubmit={handleSubmit}>
            {/* Title Label */}
              <label className="text-2xl text-gray-700 font-bold ">Register Here</label>

              {/*Name input  */}
              <input
                     type="text" 
                     name="name"
                     placeholder="Name"
                     value={details.name}
                     onChange={handleLogin}
                     className="py-1 px-2 rounded-md bg-white outline-gray-400 border-gray-300 border-2 font-light text-sm w-3/4 mx-auto shadow-md"

                     />
              {/*Username input  */}
              <input
                     type="text" 
                     name="username"
                     placeholder="Username"
                     value={details.username}
                     onChange={handleLogin}
                     className="py-1 px-2 rounded-md bg-white outline-gray-400 border-gray-300 border-2 font-light text-sm w-3/4 mx-auto shadow-md"

                     />
              {/*Password input  */}
              <input
                     type="password" 
                     name="password"
                     placeholder="Password"
                     value={details.password}
                     onChange={handleLogin}
                     className="py-1 px-2 rounded-md bg-white outline-gray-400 border-gray-300 border-2 font-light text-sm w-3/4 mx-auto shadow-md"

                     />
              {/*Email input  */}
              <input
                     type="text" 
                     name="email"
                     placeholder="Email"
                     value={details.email}
                     onChange={handleLogin}
                     className="py-1 px-2 rounded-md bg-white outline-gray-400 border-gray-300 border-2 font-light text-sm w-3/4 mx-auto shadow-md"

                     />

                <div className="w-full flex flex-col items-center ">
                  {/* Signup Button */}
                    <button className="border-transparent py-1 px-8 rounded-lg text-white bg-orange-600 shadow-lg font-semibold tracking-wider duration-150 ease-out hover:bg-orange-400 hover:text-white/70 ">Signup</button>
                    
                    <div className="flex mt-2 items-center gap-1">
                    <p className=" text-gray-400 text-sm">Have an account already?</p>
                    <Link href={"/login"}>
                      <p className="text-orange-500 text-sm font-normal hover:text-orange-900"> Log in </p>
                    </Link>
                    </div>
                  </div>     
          </form>
      </div>
  )
}
