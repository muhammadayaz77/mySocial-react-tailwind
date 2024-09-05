import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Rightbar from '../components/Rightbar'
function Home() {
  return (
    <>
    <Navbar></Navbar>
    <div className='grid grid-cols-12 pt-[56px]'>
      <div className='col-span-3'>
        <Sidebar></Sidebar>
      </div>
      <div className='col-span-5'>
        <Feed></Feed>
      </div>
      <div className='col-span-4'>
        <Rightbar></Rightbar>
      </div>
    </div>
    </>
  )
}

export default Home