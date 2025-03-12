'use client'
import React from 'react'
import Image from 'next/image'
import logo from '../../assests/image1.png'
import address from '../../assests/image4.svg'
import { VolumeWidget } from '@/components'
import {TransactionHistoryContainer} from '@/components'
import edit from '../../assests/magicpen.svg'
const page = () => {

  function Copy() {
    alert('address copied!')
  }
  return (
    <div className=' grid items-center lg:gap-[0rem] gap-[2rem]  justify-center' >
       <div className="flex justify-between w-screen pt-[10%]  lg:w-[100%]  lg:m-auto mt-[1rem] px-[0.7rem] lg:px-0 items-center  ">
   <Image 
   src={logo}
   alt="logo"
   width={100}
   height={100}
   className="lg:w-[180px] lg:h-[40px] w-[100px] h-[18px]  "
   />
   <div className="flex flex-row gap-[1rem]">
   <Image
   src={address}
   alt="logo"
   width={30}
   height={30}
   className="lg:w-[150px]  lg:h-[150px] w-[90px] h-[35px] cursor-pointer"
   onClick={Copy}
   />
   </div>
   </div>
   
    <div className="grid pt-[2%]  overflow-hidden px-[rem] items-start justify-center gap-[3rem] lg:gap-[2rem] h-full   bg-cover bg-center" style={{ backgroundImage: "url('/image3.svg')", backgroundPosition : "center" }}>
   <div className=' grid w-screen lg:w-full '>
   <div className='flex items-center justify-between ml-[1rem] w-[90%] border-[1px] p-[0.5rem] bg-[#EFEFEF] rounded-3xl border-transparent'>
   <button className='grid decoration-0 cursor-pointer '>
   <h3 className=' text-[18px] lg:text-[25px] flex  text-[#828282] font-[500]'>Hola👋,</h3>
   <h3 className='text-[18px] lg:text-[25px] text-[#121212] underline underline-offset-1 flex items-start font-[500]'>Enter your business name</h3>
   </button>
   <div className='cursor-pointer flex p-[0.5rem] bg-white border-[1px] border-white rounded-3xl  shadow-md shadow-gray-200 items-center justify-center gap-[0.4rem] lg:gap-[0.5rem]'>
   <Image
   src={edit}
   alt='edit'
   height={20}
   width={20}
   />
<h3>Edit name</h3>
   </div>
   </div>
   <VolumeWidget />
   </div>
   
   <TransactionHistoryContainer />
    </div>
    </div>
  )
}

export default page
