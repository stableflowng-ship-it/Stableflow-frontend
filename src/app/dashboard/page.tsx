'use client'
import React from 'react'
import Image from 'next/image'
import logo from '../../assests/image1.png'
import address from '../../assests/image4.svg'

const page = () => {
  return (
    <div className='grid items-start' >
       <div className="flex justify-between w-[40%] m-auto   px-[2rem] lg:px-0 items-center  ">
   <Image 
   src={logo}
   alt="logo"
   width={100}
   height={100}
   className="lg:w-[180px] lg:h-[40px] w-[120px] h-[25px]  "
   />
   <div className="flex flex-row gap-[1rem]">
   <Image
   src={address}
   alt="logo"
   width={30}
   height={30}
   className="lg:w-[150px] lg:h-[150px] w-[18px] h-[18px] cursor-pointer"
   />
   </div>
   </div>
    <div className="grid pt-[2%] overflow-hidden justify-center gap-[2rem] h-full w-[85%]  bg-cover bg-center" style={{ backgroundImage: "url('/image3.svg')", backgroundPosition : "center" }}>
   <button className=' grid'>
   <div className='grid'>
   <h3 className='text-[25px] flex items-start text-[#828282] font-[500]'>Hola👋,</h3>
   <h3 className='text-[25px] text-[#121212] flex items-start font-[500]'>Enter your business name</h3>
   </div>
   </button>
   
    </div>
    </div>
  )
}

export default page
