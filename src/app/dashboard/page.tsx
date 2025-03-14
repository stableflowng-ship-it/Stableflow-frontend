'use client'
import React, { useState, useEffect } from 'react'
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
import export2 from "../../assests/export2.svg"
import yellow from '../../assests/image6.svg'
import green from '../../assests/tick-circle.svg'
import image5 from "../../assests/import.svg"
import twit from '../../assests/x-logo.png'
import git from '../../assests/warpcast-logo.svg'

export default function Page() {
  function Copy() {
    alert('address copied!')
  }
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [progress, setProgress] = useState(0);
  
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
    <div className='grid items-center lg:gap-[0rem] gap-[2rem] justify-center bg-[#f7f7f7] min-h-screen'>
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
      
      <div className="flex flex-col pt-[2%] overflow-hidden items-start justify-center gap-[24px] h-full bg-[#f7f7f7]">
        <div className='grid w-screen lg:w-full'>
          <div className='flex items-center justify-between ml-[1rem] w-[90%] border-[1px] p-[0.5rem] bg-[#EFEFEF] rounded-3xl border-transparent'>
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger className='grid decoration-0 cursor-pointer'>
                <h3 className='text-[16px] flex text-[#828282] font-[500]'>Hola👋,</h3>
                <h3 className='text-[16px] text-[#121212] underline underline-offset-1 flex items-start font-[500]'>Enter your business name</h3>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed px-[0.5rem] inset-0 bg-black/50 z-30" />
                <Dialog.Content className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-50 p-6 rounded-2xl w-[90%] lg:w-[500px]">
                  {/* Step 1 */}
                  {step === 1 && (
                    <div className='grid gap-[2rem]'>
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
                        <p className="font-[400] text-[16px]">Business Name</p>
                        <input type="text" className="w-full border p-2 rounded border-none focus:ring-0 outline-none" placeholder="Enter business name" />
                        <h3 className='text-[#959595] font-[500] text-[12px]'>*Use your business name as incorperated</h3>
                      </div>
                      <div className='grid'>
                        <p className="font-[400] text-[16px]">Business contact</p>
                        <input type="text" className="w-full border p-2 rounded border-none focus:ring-0 outline-none" placeholder="Enter business phone number" />
                      </div>
                      <div className='grid'>
                        <p className="font-[400] text-[16px]">Business category</p>
                        <select
                          className="w-full bg-gray-100 px-4 py-2 cursor-pointer rounded-md border-none outline-none ring-0 text-gray-900"
                          defaultValue=""
                        >
                          <option value="" disabled hidden className="text-red-400">
                            Select Payment Method
                          </option>
                          <option value="cash">Cash</option>
                          <option value="pos">POS</option>
                        </select>
                      </div>
                      <PrimaryButton shortcut="" onClick={() => setStep(2)} className="mt-4 cursor-pointer px-4 py-2 bg-blue-500 text-white rounded">
                        Continue
                      </PrimaryButton>
                    </div>
                  )}

                  {/* Step 2 */}
                  {step === 2 && (
                    <div className='grid gap-[2rem]'>
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
                        <p className="font-[400] text-[16px]">Business category</p>
                        <select
                          className="w-full bg-gray-100 px-4 py-2 cursor-pointer rounded-md border-none outline-none ring-0 text-gray-900"
                          defaultValue=""
                        >
                          <option value="" disabled hidden className="">
                            Select a bank name
                          </option>
                          <option value="cash">Sterling bank</option>
                          <option value="pos">First bank </option>
                          <option value="pos">Access bank</option>
                          <option value="pos">UBA</option>
                        </select>
                      </div>
                      <div className='grid'>
                        <p className="font-[400] text-[16px]">Account number</p>
                        <input type="text" className="w-full border p-2 rounded border-none focus:ring-0 outline-none" placeholder="Enter account number" />
                        <div className='text-[#868686] border-blue-600 rounded-2xl border-[1px] w-fit flex items-start px-[1rem] py-[0.3rem]'>temidayo folajin</div>
                      </div>
                      <div className='grid'>
                        <p className="font-[400] text-[16px]">Account type</p>
                        <select
                          className="w-full bg-gray-100 px-4 py-2 cursor-pointer rounded-md border-none outline-none ring-0 text-gray-900"
                          defaultValue=""
                        >
                          <option value="" disabled hidden className="text-red-400">
                            Select an account type
                          </option>
                          <option value="cash">Cash</option>
                          <option value="pos">POS</option>
                        </select>
                      </div>
                      <PrimaryButton shortcut="" onClick={() => setStep(3)} className="mt-4 cursor-pointer px-4 py-2 bg-blue-500 text-white rounded">
                        Start accepting
                      </PrimaryButton>
                    </div>
                  )}

                  {/* Step 3 */}
                  {step === 3 && (
                    <div className='grid gap-[2rem]'>
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
                        <button onClick={Finalize} className='flex items-center cursor-pointer justify-center gap-[0.3rem]'>
                          <h3 className='font-[500] text-[#8D8D8D]'>Read</h3>
                          <Image 
                            src={export2}
                            height={20}
                            width={20}
                            alt='export'
                          />
                        </button>
                      </div>
                      <div className="w-full">
                        {checked == true ?
                          <PrimaryButton shortcut="" onClick={() => setStep(4)} className="mt-4 cursor-pointer px-4 py-2 w-full text-white rounded-2xl">
                            I consent
                          </PrimaryButton>
                        : <button className='bg-[#D3D3D3] w-full rounded-2xl text-white p-[0.5rem] cursor-not-allowed'>I consent</button>}
                      </div>
                    </div>
                  )}
                  
                  {/* Step 4 */}
                  {step === 4 && (
                    <div className='grid gap-[2rem]'>
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
