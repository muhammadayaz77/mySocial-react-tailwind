import React from 'react'
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
function Post() {
  return (
    <div className='m-5 border-2 p-4 rounded-xl' id='Post'>
      <div className='flex justify-between'>
        <div className='flex items-center'>
        <img src="./public/person/1.jpeg" className=' w-8 h-8 object-cover rounded-[50%] mr-3 ' alt="profile" />
        <p className='text-lg font-semibold'>Mrs Roni</p>
        <p className='text-sm font-extralight ml-2'>5 month ago</p>
        </div>
        <div>
        <PiDotsThreeOutlineVerticalFill className='text-xl' />
        </div>
      </div>
      <div className='my-3'>
        <p>Hey🖤 It's my first Post </p>
      </div>
      <div>
        <img src="./public/post/1.jpeg" className='max-h-[500px] w-full' alt="post1" />
      </div>
      <div className='flex justify-between items-center mt-2'>
        <div className='flex items-center'>
          <img src="./public/like.png" className='w-6 h-6 object-cover' alt="like" />
          <img src="./public/heart.png" className='w-6 h-6 object-cover' alt="heart" />
          <p className='font-normal ml-1 text-sm'>32 people like it</p>
        </div>
        <div>
          <p className='font-normal text-sm'>9 comments</p>
        </div>
      </div>
    </div>
  )
}

export default Post