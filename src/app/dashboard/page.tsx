'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../../assests/image1.png'
import address from '../../assests/image4.svg'
import { VolumeWidget } from '@/components/volume-widget'
import { TransactionHistoryContainer } from '@/components'
import edit from '../../assests/magicpen.svg'
import { TransactionNotification } from '@/components'
import * as Dialog from "@radix-ui/react-dialog";
import { TertiaryButton } from '@/components'
import twit from '../../assests/x-logo.png'
import git from '../../assests/warpcast-logo.svg'
import trash from '../../assests/trash.svg'
import wrong1 from "../../assests/group.svg"
import Modals from './modals'
import Dropdown from './dropDown'
export default function Page() {
  function Copy() {
    alert('address copied!')
  }
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(false);
  function closee() {
    setStep(1)
    setOpen(false)
  }
  return (
    <div className='w-screen grid items-center overflow-hidden lg:gap-[2rem] gap-[2rem] justify-center bg-[#f7f7f7] min-h-screen'>
      <div className="flex justify-between w-screen lg:w-[100%] lg:mt-[4rem] mt-[1rem] px-[0.7rem] lg:px-0 items-center">
        <Image 
          src={logo}
          alt="logo"
          width={100}
          height={100}
          className="lg:w-[180px] lg:h-[40px] w-[100px] h-[18px]"
        />
        <div className="flex flex-row gap-[1rem]">
          <Dropdown
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
