import React from 'react'
import { useState } from 'react'
import trash from '../../assests/trash.svg'
import wrong1 from "../../assests/group.svg"
import wrong2 from "../../assests/group2.svg"
import address from '../../assests/image4.svg'
import Image from 'next/image'
import { motion } from "framer-motion";
import wallet from '../../assests/wallet-add.svg'
export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="">
      {/* Clickable Image */}
      <button className="flex flex-row gap-[0.4rem] px-[1rem] py-[0.2rem] bg-white cursor-pointer  border-1 border-[#7177F9] rounded-xl " onClick={() => setIsOpen(!isOpen)}>
       
        <Image
          src={wallet}
          alt="logo"
          width={20}
          height={20}
          className=" cursor-pointer"
         
        />
        <h3 className='text-[#121212] font-[500] text-[14px] lg:text-[16px] '> 0xb1....5678</h3>
      </button>

      {/* Sliding Dropdown */}
      <motion.div
        initial={{ y: "-5%", opacity: 0 }}
        animate={isOpen ? { y: "5%", opacity: 1 } : { y: "0%", opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute lg:ml-[-2rem] z-50 ml-[-2.7rem] mt-[0rem] lg:mt-0 w-40 lg:w-55 bg-white flex flex-col  shadow-lg rounded-2xl"
      >
        <button className="flex gap-[0.5rem] w-full px-4 py-4  hover:bg-[#EEEEEE] cursor-pointer duration-500 rounded-t-2xl">
          <Image src={trash} alt="logo" width={20} height={20} className="cursor-pointer" />
          <h3 className="font-bold bg-gradient-to-r from-[#4BA2FF] to-[#6A6BF7] bg-clip-text text-transparent text-[14px]">
            Export wallet
          </h3>
        </button>
        <button className="flex gap-[0.5rem] w-full items-center  px-4 py-4 text-left border-t-1 border-[#F1F1F1] hover:bg-[#EEEEEE] cursor-pointer duration-500">
          <Image src={wrong1} alt="logo" width={20} height={20} className="cursor-pointer" />
          <h3 className="font-bold text-[#979797] text-[14px]">Contact support</h3>
        </button>
        <button className="flex gap-[0.5rem] w-full items-center px-4 py-4 text-left border-t-1 border-[#F1F1F1] hover:bg-[#EEEEEE] cursor-pointer duration-500">
          <Image src={wrong1} alt="logo" width={20} height={20} className="cursor-pointer" />
          <h3 className="font-bold text-[#979797] text-[14px]">Disable account</h3>
        </button>
        <button className="flex gap-[0.5rem] h-f w-full items-center px-4 py-4 text-left border-t-1 border-[#F1F1F1] hover:bg-[#EEEEEE] cursor-pointer duration-500">
          <Image src={wrong2} alt="logo" width={20} height={20} className="cursor-pointer" />
          <h3 className="font-bold text-[#FF7070] text-[14px]">Log out</h3>
        </button>
      </motion.div>
    </div>
    );
  }