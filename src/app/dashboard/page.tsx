'use client'
import React, { useState } from 'react'
import { useEffect } from 'react'
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
import Modals from './modals'
import Dropdown from './dropDown'
import { useAppSelector } from '../store/store'
import { resetInputValue } from '../store/inputSlice'
import { useAppDispatch } from '../store/store'

export default function Page() {
  const dispatch = useAppDispatch()
  const inputValue = useAppSelector((state) => state.input.value);
  const handleReset = () => {
    dispatch(resetInputValue()); // Calls the Redux reset action
  };



   const [checked, setChecked] = useState(false);
      const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(false);
  const [businessName, setBusinnesName] = useState('');
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
    setStep(step +1 )
  }
  function back() {
    setStep(step-1)
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
    <div className='w-screen grid items-center overflow-hidden lg:gap-[2rem] gap-[2rem] justify-center bg-[#f7f7f7] min-h-screen'>
      hello
    </div>
  );
}