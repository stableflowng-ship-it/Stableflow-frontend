'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../../assests/image1.png'
import { VolumeWidget } from '@/components/volume-widget'
import { TransactionHistoryContainer } from '@/components'
import edit from '../../assests/magicpen.svg'
import { TransactionNotification } from '@/components'
import * as Dialog from "@radix-ui/react-dialog";
import { TertiaryButton } from '@/components'
import twit from '../../assests/x-logo.png'
import git from '../../assests/warpcast-logo.svg'
import Modals from './modals'
import Dropdown from './dropDown'
import { useAppSelector, useAppDispatch } from '../store/store'
import { resetInputValue } from '../store/inputSlice'
import Head from "next/head";

// Structured data for Dashboard page
const dashboardJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Flow Payments Dashboard',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
};

export default function Page() {
  const dispatch = useAppDispatch()
  const inputValue = useAppSelector((state) => state.input.value);
  const handleReset = () => {
    dispatch(resetInputValue());
  };

  const [checked, setChecked] = useState(false);
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(false);
  
  function closee() {
    setOpen(false)
    setStep(1)
    setProgress(0)
    setChecked(false)
  }

  function close1() {
    setOpen(false)
    setStep(1)
    setProgress(0)
    setChecked(false)
    handleReset()
  }
  
  function forward() {
    setStep(step + 1)
  }
  
  function back() {
    setStep(step - 1)
  }

  useEffect(() => {
    if (step === 4) {
      const interval = setInterval(() => {
        setProgress((prev) => (prev < 5 ? prev + 1 : 5));
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [step]);

  function Finalize() {
    setChecked(true)
  }
  
  function openModal() {
    setOpen(true)
  }

  return (
    <>
    
      
      <div 
        className='w-screen grid items-center overflow-hidden lg:gap-[2rem] gap-[2rem] justify-center bg-[#f7f7f7] min-h-screen'
        role="main"
        aria-label="Dashboard"
      >
        <div className="flex justify-between w-screen lg:w-[100%] lg:mt-[4rem] mt-[1rem] px-[0.7rem] lg:px-0 items-center">
          <Image 
            src={logo}
            alt="Flow logo"
            width={180}
            height={40}
            className="lg:w-[180px] lg:h-[40px] w-[100px] h-[22px]"
            priority
            loading="eager"
            sizes="(max-width: 640px) 100px, 180px"
          />
          <div className="flex flex-row gap-[1rem]">
            <Dropdown />
          </div>
        </div>
        <div className="flex flex-col overflow-hidden items-start justify-center gap-[24px] h-full bg-[#f7f7f7]">
          <div className='flex flex-col w-screen lg:w-full border-[#EFEFEF] rounded-t-[20px] bg-[#EFEFEF]'>
          <Dialog.Root open={open} onOpenChange={closee}>
            <div className='flex items-center justify-between w-full py-[0.7rem] px-[1rem] bg-transparent'>
                <div className='grid decoration-0 cursor-pointer' onClick={openModal}>
                  <h3 className='text-[16px] flex text-[#828282] font-[500]'>Hola👋,</h3>
                  {inputValue ?
                  <h3 className='text-[25px] text-[#121212] underline underline-offset-1 flex items-start font-[500]'>{inputValue}</h3>
                  :
                  <h3 className='text-[16px] text-[#121212] underline underline-offset-1 flex items-start font-[500]'>Enter your business name</h3>
                  }
                        </div>
                <Modals closefunction={closee} close1={close1} step={step} forward={forward} back={back} checked={checked} progress={progress} finalize={Finalize}/>
              { inputValue ?
              <TertiaryButton className="cursor-pointer ml-auto" aria-label="Edit business name">
                <div className="flex items-center gap-2">
                  <Image
                    src={edit}
                    alt='Edit icon'
                    height={20}
                    width={20}
                  />
                  <span>Edit name</span>
                </div>
              </TertiaryButton>
  : ''}
            </div>
            <VolumeWidget openDialog={() => setOpen(true)} />
            </Dialog.Root>
          </div>

          <div className="w-full flex flex-col gap-[8px]" aria-label="Transaction information">
            <TransactionNotification />
            <TransactionHistoryContainer />
          </div>
        </div>
        <footer className="flex flex-row justify-between items-center w-full py-6 px-[1rem] lg:px-0" role="contentinfo">
          <div className="text-[#8F8F8F] text-sm font-medium flex items-center">
            Built with ❤️ et ☕
          </div>
          <div className="flex flex-row items-center gap-3">
            <div className="flex flex-row items-center gap-2">
              <div className="flex items-center justify-center w-5 h-5 rounded-md">
                <Image src={twit} alt="X icon" className="text-[#8F8F8F]" width={20} height={20} />
              </div>
              <span className="text-[#8F8F8F] text-sm font-medium">X(formerly Twitter)</span>
            </div>
            <div className="w-px h-6 bg-[#8F8F8F]"></div>
            <div className="flex flex-row items-center gap-2">
              <div className="flex items-center justify-center w-5 h-5 rounded-md">
                <Image src={git} alt="Warpcast icon" className="text-[#8F8F8F]" width={20} height={20} />
              </div>
              <span className="text-[#8F8F8F] text-sm font-medium">Warpcast</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
