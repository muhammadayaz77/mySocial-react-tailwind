import React from 'react'
import { BsSearch } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";
import { TfiComments } from "react-icons/tfi";
import { FaBell } from "react-icons/fa6";
function Navbar() {
  return (
    <>
    <nav className=''>
      <div className='flex justify-between items-center h-14 bg-[#1676F3] w-[100%] z-50 px-8 fixed'>
        <div>
          <h3 className='text-2xl font-bold text-white tracking-wider'>MySocial</h3>
        </div>
        <div className='flex'>
          <div className='flex items-center bg-white p-2 pl-4 rounded-3xl'>
          <BsSearch /> <input type="text" placeholder='Search...' className='ps-2 w-96 focus:outline-none' />
          </div>
          <div className='flex items-center ml-4 space-x-3 text-white text-lg'>
          <h1>Homepage</h1>
          <h1>Timeline</h1>
          </div>
        </div>
        <div className='text-3xl flex items-center space-x-4'>
          <RiAccountCircleFill />
          <TfiComments className='text-2xl' />
          <FaBell />
          <img src="./public/person/1.jpeg" className=' w-9 h-9 object-cover rounded-[50%]' alt="profile" />
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar