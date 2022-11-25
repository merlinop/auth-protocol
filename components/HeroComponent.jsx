'use client'
import React, {useState} from 'react'
import Link from 'next/link'


const HeroComponent = () => {

    const [search, setSearch] = useState("")

     const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Search Box clicked")
  }

  return (
    <div className='flex flex-col items-center justify-between border-2 w-full bg-black/50 py-3'>
                <form onSubmit={handleSubmit}>
                <input 
                      type="text" 
                      placeholder='Search'
                      className='bg-white/80 text-gray-900 rounded-lg px-2 placeholder:text-sm'
                      maxLength={"40"}
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      name="search"
                      />
                </form>

                <div className='px-2 flex items-center justify-evenly w-full mt-2'>
                    <Link href={"/dashboard"}>
                        <p className='text-white font-bold text-sm uppercase hover:opacity-20 duration-150 ease-in'>Home</p>
                    </Link>

                    <Link href={"/add"}>
                        <p className='text-white font-bold text-sm uppercase hover:opacity-20 duration-150 ease-in'>Add Todo</p>
                    </Link>

                    <Link href={"/about"}>
                        <p className='text-white font-bold text-sm uppercase hover:opacity-20 duration-150 ease-in'>About</p>
                    </Link>

                </div>
                
            </div>
  )
}

export default HeroComponent