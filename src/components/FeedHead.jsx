import React from 'react'
import { BiSolidVideos } from "react-icons/bi";
import { BiSolidTagAlt } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmojiEmotions } from "react-icons/md";
function FeedHead() {
  return (
    <>
    <div className='border-2 m-5 p-4 shadow-xl rounded-xl' id='FeedHead'>
      <div className='flex'>
      <img src="./public/person/1.jpeg" className=' w-12 h-12 object-cover rounded-[50%] mr-3 ' alt="profile" />
      <input type="text" placeholder="What's in your mind ?" className='focus:outline-none' />
      </div>
      <div className='bg-gray-300 h-[2px] w-[95%] flex justify-center mx-auto mt-4'></div>
      <div className='flex space-x-4 mt-5 w-[95%] mx-auto mb-4'>
        <div className='flex items-center text-2xl'><BiSolidVideos className='text-pink-600' /> <span className='text-sm font-semibold'>Photos Videos</span></div>
        <div className='flex items-center text-2xl'><BiSolidTagAlt className='text-blue-700' /> <span className='text-sm font-semibold'>Tag</span></div>
        <div className='flex items-center text-2xl'><FaLocationDot className='text-green-600' /> <span className='text-sm font-semibold'>Location</span></div>
        <div className='flex items-center text-2xl'><MdEmojiEmotions className='text-yellow-300' /> <span className='text-sm font-semibold '>Feeling</span></div>
        <div className='flex items-center text-2xl pl-24'>
          <button className='bg-green-600 text-white rounded-md ml-auto px-2 py-[5px] text-sm '>Share</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default FeedHead