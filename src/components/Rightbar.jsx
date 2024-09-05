import React from 'react'

function Rightbar() {
  return (
    <>
    <div className='m-5'>
      <div className='flex space-x-2 items-center'>
        <div>
          <img src="./public/gift.png" className='h-12 w-12' alt="gift" />
        </div>
        <div className='text-xl'>
           <p><b>Mrs Roni</b> and <b>3 others friends</b> have a <br />birthday today</p>
        </div>
      </div>
      <div>
        <img src="./public/ad.png" alt="add picture" className='max-w-[100%] rounded-xl mt-4' />
      </div>
      <div className='my-4'>
        <p className='font-bold text-lg'>Online Friends</p>
      </div>
      <div className='flex items-center mb-2'>
        <div className='relative w-fit'>
          <img src="./public/person/2.jpeg" className='w-11 h-11 object-cover rounded-[50%]' alt="person2" />
          <div className='h-4 w-4 bg-green-400 rounded-[50%] absolute top-0 right-[1px] border-white border-2'>

          </div>
        </div>
        <div className='font-medium text-lg ml-2'>
          Mark Henry
        </div>
      </div>
      <div className='flex items-center mb-2'>
        <div className='relative w-fit'>
          <img src="./public/person/2.jpeg" className='w-11 h-11 object-cover rounded-[50%]' alt="person2" />
          <div className='h-4 w-4 bg-green-400 rounded-[50%] absolute top-0 right-[1px] border-white border-2'>

          </div>
        </div>
        <div className='font-medium text-lg ml-2'>
          Mark Henry
        </div>
      </div>
      <div className='flex items-center mb-2'>
        <div className='relative w-fit'>
          <img src="./public/person/2.jpeg" className='w-11 h-11 object-cover rounded-[50%]' alt="person2" />
          <div className='h-4 w-4 bg-green-400 rounded-[50%] absolute top-0 right-[1px] border-white border-2'>

          </div>
        </div>
        <div className='font-medium text-lg ml-2'>
          Mark Henry
        </div>
      </div>
      <div className='flex items-center mb-2'>
        <div className='relative w-fit'>
          <img src="./public/person/2.jpeg" className='w-11 h-11 object-cover rounded-[50%]' alt="person2" />
          <div className='h-4 w-4 bg-green-400 rounded-[50%] absolute top-0 right-[1px] border-white border-2'>

          </div>
        </div>
        <div className='font-medium text-lg ml-2'>
          Mark Henry
        </div>
      </div>
    </div>
    </>
  )
}

export default Rightbar