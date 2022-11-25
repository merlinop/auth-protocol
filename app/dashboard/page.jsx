
import HeroComponent from 'components/HeroComponent'
import PostComponent from 'components/PostComponent'
import React from 'react'



const dashboard = () => {

  
  

  return (
    <div className="w-full h-screen items-center justify-center flex flex-col shadow-xl drop-shadow-md bg-orange-400">
        <div className='border-transparent w-3/4 max-w-lg h-[70%] rounded-lg bg-gray-100 shadow-lg drop-shadow-lg flex flex-col items-center'>
          {/* Header  */}
            <div className='w-full flex items-center justify-center py-2'>

              {/* Header Text */}
               <h1 className='text-3xl font-semibold text-gray-900 tracking-wider'>Mini Ways</h1>
            </div>

            {/* Hero Section */}
            <HeroComponent />

            {/* Post section */}
            <PostComponent />
        </div>
    </div>
  )
}

export default dashboard













