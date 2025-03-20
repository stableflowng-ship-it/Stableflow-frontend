import React, { useState, useRef, useEffect, useCallback, memo } from 'react'
import trash from '../../assests/trash.svg'
import wrong1 from "../../assests/group.svg"
import wrong2 from "../../assests/group2.svg"
import Image from 'next/image'
import { motion } from "framer-motion";
import wallet from '../../assests/wallet-add.svg'

const dropdownVariants = {
  hidden: { y: "-5%", opacity: 0 },
  visible: { y: "5%", opacity: 1 },
  exit: { y: "0%", opacity: 0 }
};

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    
    const toggleDropdown = useCallback(() => {
      setIsOpen(!isOpen);
    }, [isOpen]);
    
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    
    return (
      <div className="" ref={dropdownRef}>
        <button 
          className="flex flex-row gap-[0.4rem] px-[1rem] py-[0.2rem] bg-white cursor-pointer border-1 border-[#7177F9] rounded-xl" 
          onClick={toggleDropdown}
          aria-haspopup="true"
          aria-expanded={isOpen}
        >    
          <Image
            src={wallet}
            alt="wallet icon"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <h3 className='text-[#121212] font-[500] text-[14px] lg:text-[16px]'>0xb1....5678</h3>
        </button>

        {/* Sliding Dropdown */}
        <motion.div
          variants={dropdownVariants}
          initial="hidden"
          animate={isOpen ? "visible" : "exit"}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute lg:ml-[-2rem] z-50 ml-[-2.7rem] mt-[0rem] lg:mt-0 w-40 lg:w-55 bg-white flex flex-col shadow-lg rounded-2xl"
          role="menu"
          aria-orientation="vertical"
        >
          <button 
            className="flex gap-[0.5rem] w-full px-4 py-4 hover:bg-[#EEEEEE] cursor-pointer duration-500 rounded-t-2xl"
            role="menuitem"
          >
            <Image src={trash} alt="export wallet icon" width={20} height={20} className="cursor-pointer" />
            <h3 className="font-bold bg-gradient-to-r from-[#4BA2FF] to-[#6A6BF7] bg-clip-text text-transparent text-[14px]">
              Export wallet
            </h3>
          </button>
          <button 
            className="flex gap-[0.5rem] w-full items-center px-4 py-4 text-left border-t-1 border-[#F1F1F1] hover:bg-[#EEEEEE] cursor-pointer duration-500"
            role="menuitem"
          >
            <Image src={wrong1} alt="support icon" width={20} height={20} className="cursor-pointer" />
            <h3 className="font-bold text-[#979797] text-[14px]">Contact support</h3>
          </button>
          <button 
            className="flex gap-[0.5rem] w-full items-center px-4 py-4 text-left border-t-1 border-[#F1F1F1] hover:bg-[#EEEEEE] cursor-pointer duration-500"
            role="menuitem"
          >
            <Image src={wrong1} alt="disable account icon" width={20} height={20} className="cursor-pointer" />
            <h3 className="font-bold text-[#979797] text-[14px]">Disable account</h3>
          </button>
          <button 
            className="flex gap-[0.5rem] h-f w-full items-center px-4 py-4 text-left border-t-1 border-[#F1F1F1] hover:bg-[#EEEEEE] cursor-pointer duration-500"
            role="menuitem"
          >
            <Image src={wrong2} alt="logout icon" width={20} height={20} className="cursor-pointer" />
            <h3 className="font-bold text-[#FF7070] text-[14px]">Log out</h3>
          </button>
        </motion.div>
      </div>
    );
  }

export default memo(Dropdown);