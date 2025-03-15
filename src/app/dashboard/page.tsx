'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import logo from '../../assests/image1.png'
import address from '../../assests/image4.svg'
import { VolumeWidget } from '@/components'
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
  
  function Finalize() {
    setChecked(true)
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
    <div className='grid items-center overflow-hidden lg:gap-[0rem] gap-[2rem] justify-center bg-[#f7f7f7] min-h-screen'>
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
      
      <div className="flex flex-col pt-[2%] overflow-hidden items-start justify-center gap-[24px]  h-full bg-[#f7f7f7] ">
        <div className='grid w-screen lg:w-full  border-[#EFEFEF] rounded-t-2xl  bg-[#EFEFEF]'>
          <div className='flex items-center justify-between ml-[1rem] w-[90%] py-[0.7rem]    bg-transparent '>
          <div className="absolute -bottom-5 -left-6 w-10 h-5 bg-[#EFEFEF]  rounded-br-full"></div>
          <div className="absolute -bottom-5 -right-6 w-10 h-5 bg-[#EFEFEF] rounded-bl-full"></div>
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger className='grid decoration-0 cursor-pointer'>
                <h3 className='text-[16px] flex text-[#828282] font-[500]'>Hola👋,</h3>
                <h3 className='text-[16px] text-[#121212] underline underline-offset-1 flex items-start font-[500]'>Enter your business name</h3>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed px-[0.5rem] inset-0 bg-black/50 z-30" />
                <Dialog.Content className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-50 p-6 rounded-[20px] w-[90%] lg:w-[500px]" style={{ borderRadius: '20px' }}>
                  {/* Keyframes for gradient animation */}
                  <style jsx>{`
                    @keyframes gradient {
                      0% {
                        background-position: 0% 0%;
                      }
                      100% {
                        background-position: 200% 0%;
                      }
                    }
                  `}</style>
                  
                  {/* Step 1 */}
                  {step === 1 && (
                    <div className='grid gap-[16px]'>
                      <div className='flex flex-row items-center justify-between'>
                        <Dialog.Title className="lg:text-[24px] text-[18px] font-[600]">Set up your business entity</Dialog.Title>
                        <Image 
                          src={close}
                          width={30}
                          height={30}
                          alt='close'
                          className='cursor-pointer'
                          onClick={closee}
                        />
                      </div>
                      <div className='grid'>
                        <p className="font-[400] text-[16px] mb-[8px]">Business Name</p>
                        <div className="relative w-full">
                          {/* Gradient Border Container */}
                          <div className={`relative rounded-[10px] ${focusedInput === 'businessName' ? 'p-0.5' : 'p-0'}`}>
                            {/* Animated gradient background (only visible when focused) */}
                            {focusedInput === 'businessName' && (
                              <div 
                                className="absolute inset-0 rounded-[10px]"
                                style={{
                                  background: 'linear-gradient(90deg, #1F90FF, #504CF6, #1F90FF)',
                                  backgroundSize: '200% auto',
                                  animation: 'gradient 2s linear infinite',
                                }}
                              />
                            )}
                            
                            {/* Input container */}
                            <div 
                              className={`
                                relative flex items-center p-2 px-4 h-9 rounded-[10px]
                                ${focusedInput === 'businessName' ? 'bg-white' : 'bg-gray-100 border border-gray-200'}
                              `}
                            >
                              <input
                                type="text"
                                placeholder="Enter business name"
                                onFocus={() => setFocusedInput('businessName')}
                                onBlur={() => setFocusedInput(null)}
                                className={`
                                  w-full h-5 text-sm font-medium tracking-wide bg-transparent 
                                  border-none outline-none focus:ring-0
                                `}
                              />
                            </div>
                          </div>
                        </div>
                        <h3 className='text-[#959595] font-[500] text-[12px]'>*Use your business name as incorperated</h3>
                      </div>
                      <div className='grid'>
                        <p className="font-[400] text-[16px] mb-[8px]">Business contact</p>
                        <div className="relative w-full">
                          {/* Gradient Border Container */}
                          <div className={`relative rounded-[10px] ${focusedInput === 'businessContact' ? 'p-0.5' : 'p-0'}`}>
                            {/* Animated gradient background (only visible when focused) */}
                            {focusedInput === 'businessContact' && (
                              <div 
                                className="absolute inset-0 rounded-[10px]"
                                style={{
                                  background: 'linear-gradient(90deg, #1F90FF, #504CF6, #1F90FF)',
                                  backgroundSize: '200% auto',
                                  animation: 'gradient 2s linear infinite',
                                }}
                              />
                            )}
                            
                            {/* Input container */}
                            <div 
                              className={`
                                relative flex items-center p-2 px-4 h-9 rounded-[10px]
                                ${focusedInput === 'businessContact' ? 'bg-white' : 'bg-gray-100 border border-gray-200'}
                              `}
                            >
                              <input
                                type="text"
                                placeholder="Enter business phone number"
                                onFocus={() => setFocusedInput('businessContact')}
                                onBlur={() => setFocusedInput(null)}
                                className={`
                                  w-full h-5 text-sm font-medium tracking-wide bg-transparent 
                                  border-none outline-none focus:ring-0
                                `}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='grid'>
                        <p className="font-[400] text-[16px] mb-[8px]">Business category</p>
                        <BusinessDropdownSelector
                          placeholder="Select Payment Method"
                          options={['Cash', 'POS']}
                          value={paymentMethod}
                          onChange={(option: string) => setPaymentMethod(option)}
                          width="100%"
                        />
                      </div>
                      <PrimaryButton shortcut="" onClick={() => setStep(2)} className="mt-4 cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-[10px] border-0">
                        Continue
                      </PrimaryButton>
                    </div>
                  )}

                  {/* Step 2 */}
                  {step === 2 && (
                    <div className='grid gap-[16px]'>
                      <div className='flex flex-row items-center justify-between'>
                        <Dialog.Title className="lg:text-[24px] text-[18px] font-[600]">Set up receiver account</Dialog.Title>
                        <Image 
                          src={close}
                          width={30}
                          height={30}
                          alt='close'
                          className='cursor-pointer'
                          onClick={closee}
                        />
                      </div>
                      <div className='grid'>
                        <p className="font-[400] text-[16px] mb-[8px]">Business category</p>
                        <BusinessDropdownSelector
                          placeholder="Select a bank name"
                          options={['Sterling bank', 'First bank', 'Access bank', 'UBA']}
                          value={bankName}
                          onChange={(option: string) => setBankName(option)}
                          width="100%"
                        />
                      </div>
                      <div className='grid'>
                        <p className="font-[400] text-[16px] mb-[8px]">Account number</p>
                        <div className="relative w-full">
                          {/* Gradient Border Container */}
                          <div className={`relative rounded-[10px] ${focusedInput === 'accountNumber' ? 'p-0.5' : 'p-0'}`}>
                            {/* Animated gradient background (only visible when focused) */}
                            {focusedInput === 'accountNumber' && (
                              <div 
                                className="absolute inset-0 rounded-[10px]"
                                style={{
                                  background: 'linear-gradient(90deg, #1F90FF, #504CF6, #1F90FF)',
                                  backgroundSize: '200% auto',
                                  animation: 'gradient 2s linear infinite',
                                }}
                              />
                            )}
                            
                            {/* Input container */}
                            <div 
                              className={`
                                relative flex items-center p-2 px-4 h-9 rounded-[10px]
                                ${focusedInput === 'accountNumber' ? 'bg-white' : 'bg-gray-100 border border-gray-200'}
                              `}
                            >
                              <input
                                type="text"
                                placeholder="Enter account number"
                                onFocus={() => setFocusedInput('accountNumber')}
                                onBlur={() => setFocusedInput(null)}
                                className={`
                                  w-full h-5 text-sm font-medium tracking-wide bg-transparent 
                                  border-none outline-none focus:ring-0
                                `}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='text-[#868686] border-blue-600 rounded-[100px] border-[1px] w-fit flex items-start px-[8px] py-[4px] mt-[8px] text-[14px] font-[500]'>Temidayo Folajin</div>
                      </div>
                      <div className='grid'>
                        <p className="font-[400] text-[16px] mb-[8px]">Account type</p>
                        <BusinessDropdownSelector
                          placeholder="Select an account type"
                          options={['Cash', 'POS']}
                          value={accountType}
                          onChange={(option: string) => setAccountType(option)}
                          width="100%"
                        />
                      </div>
                      <PrimaryButton shortcut="" onClick={() => setStep(3)} className="mt-4 cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-[10px] border-0">
                        Start accepting
                      </PrimaryButton>
                    </div>
                  )}

                  {/* Step 3 */}
                  {step === 3 && (
                    <div className='grid gap-[16px]'>
                      <div className='flex flex-row items-center justify-between'>
                        <Dialog.Title className="lg:text-[24px] text-[18px] font-[600]">Set up receiver account</Dialog.Title>
                        <Image 
                          src={close}
                          width={30}
                          height={30}
                          alt='close'
                          className='cursor-pointer'
                          onClick={closee}
                        />
                      </div>
                      <div className="flex justify-between p-[1rem] items-center border-[2px] cursor-pointer rounded-2xl border-[#E2E2E2]">
                        <h3 className='text-black font-[600] text-[16px]'>Read our terms of service</h3>
                        <button 
                          onClick={Finalize}
                          className="flex items-center gap-1 px-2 py-1 text-sm font-medium text-[#8D8D8D] bg-white rounded-full shadow-sm hover:bg-gray-50"
                        >
                          <span>Read</span>
                          <Image 
                            src={export2}
                            height={16}
                            width={16}
                            alt='export'
                          />
                        </button>
                      </div>
                      <div className="w-full">
                        {checked == true ?
                          <PrimaryButton shortcut="" onClick={() => setStep(4)} className="mt-4 cursor-pointer px-4 py-2 w-full text-white rounded-[10px] border-0">
                            I consent
                          </PrimaryButton>
                        : <button className='bg-[#D3D3D3] w-full rounded-[10px] border-0 text-white p-[0.5rem] cursor-not-allowed'>I consent</button>}
                      </div>
                    </div>
                  )}
                  
                  {/* Step 4 */}
                  {step === 4 && (
                    <div className='grid gap-[16px]'>
                      <div className='flex flex-row items-center justify-between'>
                        <Dialog.Title className="lg:text-[24px] text-[18px] font-[600]">Set up receiver account</Dialog.Title>
                        <Image 
                          src={close}
                          width={30}
                          height={30}
                          alt='close'
                          className='cursor-pointer'
                          onClick={closee}
                        />
                      </div>
                      {checklist.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Image
                            src={progress > index ? green : yellow}
                            width={20}
                            height={20}
                            alt="check"
                            className="transition-all duration-300"
                          />
                          <p className={`text-[16px] ${progress > index ? "text-green-600 font-medium" : "text-gray-500"}`}>
                            {item}
                          </p>
                        </div>
                      ))}
                      {progress > 4 ?
                        <button className='flex items-center left-[50%] lg:left-[65%] relative'>
                          <Image
                            src={image5}
                            width={20}
                            height={20}
                            alt='import'
                          />
                          <h3 className='text-[#8D8D8D] cursor-pointer text-[16px]'>Download QR code</h3>
                        </button>
                      : ""}
                    </div>
                  )}
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
            <TertiaryButton className="cursor-pointer">
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
          <VolumeWidget />
        </div>

        <div className="w-full flex flex-col gap-[8px]">
          <TransactionNotification />
          <TransactionHistoryContainer />
        </div>
      </div>
      <footer className="flex flex-row justify-between items-center w-full py-6">
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
