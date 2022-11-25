import React from 'react'
import posts from 'data/posts'


const PostComponent = () => {
  return (
    <div className='h-[60vh] md:h-[60vh] overflow-y-scroll scroll-smooth pt-4 w-full'>
        {posts.map((post, index) => (
            <div key={index} className='flex flex-col px-5 mb-3 w-full'>
                <h1 className='font-bold text-base uppercase text-gray-800'>{post.title}</h1>
                <p className='text-sm text-gray-500'>{post.comment.slice(0,100)}.... 
                <span className='text-red-500 cursor-pointer hover:opacity-70 focus:text-blue-400'>
                   see more
                </span>
                </p>
            </div>
        ))}
    </div>
  )
}

export default PostComponent