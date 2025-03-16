import React from 'react'
import { useState } from 'react'
import trash from '../../assests/trash.svg'
import wrong1 from "../../assests/group.svg"
import wrong2 from "../../assests/group2.svg"
import address from '../../assests/image4.svg'
import Image from 'next/image'
export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="relative inline-block text-left">
        {/* Clickable Div */}
        <div className="flex flex-row gap-[1rem]">
          <Image
            src={address}
            alt="logo"
            width={30}
            height={30}
            className="lg:w-[150px] lg:h-[150px] w-[90px] h-[35px] cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute lg:ml-[12rem]  ml-[-9rem] lg:mt-[-2rem] lg:z-3 z-15 w-55 bg-white flex flex-col gap-[1rem]  shadow-lg rounded-2xl  ">
            <button className="flex gap-[0.5rem] rounded-t-2xl  w-full z px-4 py-4 text-left bg-[#EEEEEE] rounded">
            <Image
            src={trash}
            alt="logo"
            width={20}
            height={20} 
            className="  cursor-pointer"
          />
            <h3  className='font-bold bg-gradient-to-r from-[#4BA2FF] to-[#6A6BF7] bg-clip-text text-transparent text-[14px]'>Export wallet</h3>
            </button>
            <button className="flex gap-[0.5rem] rounded-t-2xl  w-full z px-4  pb-4 text-left border-b-1 border-[#F1F1F1] ">
            <Image
            src={wrong1}
            alt="logo"
            width={20}
            height={20}
            className="  cursor-pointer"
          />
            <h3  className='font-bold text-[#979797] text-[14px]'>Contact support</h3>
            </button>
            <button className="flex gap-[0.5rem] rounded-t-2xl  w-full z px-4  pb-4 text-left border-b-1 border-[#F1F1F1] ">
            <Image
            src={wrong1}
            alt="logo"
            width={20}
            height={20}
            className="  cursor-pointer"
          />
            <h3  className='font-bold text-[#979797] text-[14px]'>Disable account</h3>
            </button>
            <button className="flex gap-[0.5rem] rounded-t-2xl  w-full z px-4  pb-4 text-left border-b-1 border-[#F1F1F1] ">
            <Image
            src={wrong2}
            alt="logo"
            width={20}
            height={20}
            className="  cursor-pointer"
          />
            <h3  className='font-bold text-[#FF7070] text-[14px]'>Log out</h3>
            </button>
          </div>
        )}
      </div>
    );
  }