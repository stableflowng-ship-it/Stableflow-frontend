'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import logo from '../../assests/image1.png'
import address from '../../assests/image4.svg'
import { VolumeWidget } from '@/components/volume-widget'
import { TransactionHistoryContainer } from '@/components'
import edit from '../../assests/magicpen.svg'
import { TransactionNotification } from '@/components'
import * as Dialog from "@radix-ui/react-dialog";
import close from "../../assests/add.svg"
import { PrimaryButton, TertiaryButton } from '@/components'
import yellow from '../../assests/image6.svg'
import green from '../../assests/tick-circle.svg'
import image5 from "../../assests/import.svg"
import twit from '../../assests/x-logo.png'
import git from '../../assests/warpcast-logo.svg'
import export2 from "../../assests/export2.svg"
import Modals from './modals'

interface BusinessDropdownSelectorProps {
  placeholder?: string;
  options: string[];
  value: string;
  onChange: (option: string) => void;
  width?: string;
}

const BusinessDropdownSelector: React.FC<BusinessDropdownSelectorProps> = ({
  placeholder = "Select an option",
  options = [],
  value,
  onChange,
  width = "454px"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsFocused(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsFocused(!isOpen);
  };

  return (
    <div className="flex flex-col items-start p-0 w-full max-w-md h-9" style={{ width }} ref={dropdownRef}>
      <div 
        className={`
          box-border flex flex-row items-center justify-between p-2 px-4 w-full h-9
          bg-gray-100 border cursor-pointer rounded-[10px]
          ${isFocused ? 'border-blue-500' : 'border-gray-100'}
        `}
        onClick={toggleDropdown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        tabIndex={0}
      >
        <div className="flex flex-row justify-between items-center w-full gap-4">
          <span 
            className={`
              h-5 text-sm font-medium tracking-wide leading-tight
              ${value ? 'text-gray-800' : 'text-gray-300'}
              font-sans truncate
            `}
            style={{ letterSpacing: '0.002em' }}
          >
            {value || placeholder}
          </span>
          
          <div className="flex items-center justify-center w-5 h-5">
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 18 18" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
            >
              <path 
                d="M11.25 6.75L9 9L6.75 6.75" 
                stroke="#292D32" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="absolute mt-10 w-full max-w-md bg-white rounded-[10px] shadow-lg z-10 max-h-60 overflow-y-auto">
          {options.map((option, index) => (
            <div 
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default function Page() {
  function Copy() {
    alert('address copied!')
  }
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [progress, setProgress] = useState(0);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [bankName, setBankName] = useState('');
  const [accountType, setAccountType] = useState('');
  
  function closee() {
    setStep(1)
    setOpen(false)
  }
  
  
  useEffect(() => {
    if (step === 4) {
      const interval = setInterval(() => {
        setProgress((prev) => (prev < 5 ? prev + 1 : 5));
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [step]);
  const checklist = [
    "Business name added",
    "Configure receiver account",
    "Creating a crypto wallet",
    "You're set up!",
  ];

  return (
    <div className='w-screen grid items-center overflow-hidden lg:gap-[0rem] gap-[2rem] justify-center bg-[#f7f7f7] min-h-screen'>
      <div className="flex justify-between w-screen lg:w-[100%] lg:m-auto mt-[1rem] px-[0.7rem] lg:px-0 items-center">
        <Image 
          src={logo}
          alt="logo"
          width={100}
          height={100}
          className="lg:w-[180px] lg:h-[40px] w-[100px] h-[18px]"
        />
        <div className="flex flex-row gap-[1rem]">
          <Image
            src={address}
            alt="logo"
            width={30}
            height={30}
            className="lg:w-[150px] lg:h-[150px] w-[90px] h-[35px] cursor-pointer"
            onClick={Copy}
          />
        </div>
      </div>
      
      <div className="flex flex-col pt-[0%] overflow-hidden items-start justify-center gap-[24px] h-full bg-[#f7f7f7] ">
        <div className='flex flex-col w-screen lg:w-full border-[#EFEFEF] rounded-t-[20px] bg-[#EFEFEF]'>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <div className='flex items-center justify-between w-full py-[0.7rem] px-[1rem] bg-transparent'>
          
           
              <Dialog.Trigger className='grid decoration-0 cursor-pointer'>
                <h3 className='text-[16px] flex text-[#828282] font-[500]'>Hola👋,</h3>
                <h3 className='text-[16px] text-[#121212] underline underline-offset-1 flex items-start font-[500]'>Enter your business name</h3>
              </Dialog.Trigger>
              <Modals closefunction={closee}/>
            <TertiaryButton className="cursor-pointer ml-auto">
              <div className="flex items-center gap-2">
                <Image
                  src={edit}
                  alt='edit'
                  height={20}
                  width={20}
                />
                <span>Edit name</span>
              </div>
            </TertiaryButton>
          </div>
          <VolumeWidget openDialog={() => setOpen(true)} />
          </Dialog.Root>
        </div>

        <div className="w-full flex flex-col gap-[8px]">
          <TransactionNotification />
          <TransactionHistoryContainer />
        </div>
      </div>
      <footer className="flex flex-row justify-between items-center w-full py-6 px-[1rem] lg:px-0">
        <div className="text-[#8F8F8F] text-sm font-medium flex items-center">
          Built with ❤️ et ☕
        </div>
        <div className="flex flex-row items-center gap-3">
          <div className="flex flex-row items-center gap-2">
            <div className="flex items-center justify-center w-5 h-5 rounded-md">
              <Image src={twit} alt="X icon" className="text-[#8F8F8F]" />
            </div>
            <span className="text-[#8F8F8F] text-sm font-medium">X(formerly Twitter)</span>
          </div>
          <div className="w-px h-6 bg-[#8F8F8F]"></div>
          <div className="flex flex-row items-center gap-2">
            <div className="flex items-center justify-center w-5 h-5 rounded-md">
              <Image src={git} alt="Warpcast icon" className="text-[#8F8F8F]" />
            </div>
            <span className="text-[#8F8F8F] text-sm font-medium">Warpcast</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
