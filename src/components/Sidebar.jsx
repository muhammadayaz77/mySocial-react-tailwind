import React from 'react'
import { MdOutlineRssFeed } from "react-icons/md";
import { FaRocketchat } from "react-icons/fa";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { MdOutlineGroups3 } from "react-icons/md";
import { MdBookmarks } from "react-icons/md";
import { FaCircleQuestion } from "react-icons/fa6";
import { BsFillBagFill } from "react-icons/bs";
import { MdEventNote } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";


function Sidebar() {
  return (
    <>
    <div className='sidebar p-5'>
      <div>
        <ul className=''>
          <li className='flex items-center space-x-4 mb-3'><MdOutlineRssFeed className=' text-2xl' /> <span className='text-lg'>Feed</span></li>
          <li className='flex items-center space-x-4 mb-3'><FaRocketchat className=' text-2xl' /> <span className='text-lg'>Chats</span></li>
          <li className='flex items-center space-x-4 mb-3'><MdOutlineSlowMotionVideo className=' text-2xl' /> <span className='text-lg'>Videos</span></li>
          <li className='flex items-center space-x-4 mb-3'><MdOutlineGroups3 className=' text-2xl' /> <span className='text-lg'>Groups</span></li>
          <li className='flex items-center space-x-4 mb-3'><MdBookmarks className=' text-2xl' /> <span className='text-lg'>Bookmarks</span></li>
          <li className='flex items-center space-x-4 mb-3'><FaCircleQuestion className=' text-2xl' /> <span className='text-lg'>Questions</span></li>
          <li className='flex items-center space-x-4 mb-3'><BsFillBagFill className=' text-2xl' /> <span className='text-lg'>Jobs</span></li>
          <li className='flex items-center space-x-4 mb-3'><MdEventNote className=' text-2xl' /> <span className='text-lg'>Events</span></li>
          <li className='flex items-center space-x-4 mb-3'><FaGraduationCap className=' text-2xl' /> <span className='text-lg'>Courses</span></li>
          <li className='flex items-center mb-3'>
            <button className='bg-[#dedddd] px-8 py-2 text-sm'>Show More</button>
          </li>
        </ul>
        <hr className='w-[80%] my-5' />
        <div className='mt-0'>
          <ul>
          <li className='flex items-center space-x-4 mb-3'>
              <img src="./public/person/1.jpeg" alt="profile1" className='w-10 h-10 object-cover rounded-[50%]'  />
             <span className='text-lg font-medium'>Mrs Roni</span></li>
          <li className='flex items-center space-x-4 mb-3'>
              <img src="./public/person/1.jpeg" alt="profile1" className='w-10 h-10 object-cover rounded-[50%]'  />
             <span className='text-lg font-medium'>Mrs Roni</span></li>
          <li className='flex items-center space-x-4 mb-3'>
              <img src="./public/person/1.jpeg" alt="profile1" className='w-10 h-10 object-cover rounded-[50%]'  />
             <span className='text-lg font-medium'>Mrs Roni</span></li>
          <li className='flex items-center space-x-4 mb-3'>
              <img src="./public/person/1.jpeg" alt="profile1" className='w-10 h-10 object-cover rounded-[50%]'  />
             <span className='text-lg font-medium'>Mrs Roni</span></li>
          <li className='flex items-center space-x-4 mb-3'>
              <img src="./public/person/1.jpeg" alt="profile1" className='w-10 h-10 object-cover rounded-[50%]'  />
             <span className='text-lg font-medium'>Mrs Roni</span></li>
          <li className='flex items-center space-x-4 mb-3'>
              <img src="./public/person/1.jpeg" alt="profile1" className='w-10 h-10 object-cover rounded-[50%]'  />
             <span className='text-lg font-medium'>Mrs Roni</span></li>
          <li className='flex items-center space-x-4 mb-3'>
              <img src="./public/person/1.jpeg" alt="profile1" className='w-10 h-10 object-cover rounded-[50%]'  />
             <span className='text-lg font-medium'>Mrs Roni</span></li>
          <li className='flex items-center space-x-4 mb-3'>
              <img src="./public/person/1.jpeg" alt="profile1" className='w-10 h-10 object-cover rounded-[50%]'  />
             <span className='text-lg font-medium'>Mrs Roni</span></li>
          <li className='flex items-center space-x-4 mb-3'>
              <img src="./public/person/1.jpeg" alt="profile1" className='w-10 h-10 object-cover rounded-[50%]'  />
             <span className='text-lg font-medium'>Mrs Roni</span></li>
          <li className='flex items-center space-x-4 mb-3'>
              <img src="./public/person/1.jpeg" alt="profile1" className='w-10 h-10 object-cover rounded-[50%]'  />
             <span className='text-lg font-medium'>Mrs Roni</span></li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Sidebar