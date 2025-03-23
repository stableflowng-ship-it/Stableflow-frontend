"use client"
import { useState, useEffect } from "react"
import { Eye, EyeOff, Zap } from "lucide-react"
import { PrimaryButton } from "./primary-button"
import { SecondaryButton } from "./secondary-button"
import share from '../assests/export.svg'
import Image from "next/image"
import NumberFlow from '@number-flow/react'


interface OpenModal {
  openDialog: () => void; // Function to open dialog
}
export const VolumeWidget: React.FC<OpenModal> = ({ openDialog }) => {
  const [isHidden, setIsHidden] = useState(false)
  const [currentValue, setCurrentValue] = useState(300)
  const [isMounted, setIsMounted] = useState(false)
  const targetValue = 300
  
  // This ensures consistent rendering between server and client
 

  return (
    <div className="relative lg:w-[573px] m-auto  bg-[#FFFFFF]  rounded-[20px] grid lg:items-start lg:justify-normal md:items-start md:justify-normal items-center justify-center w-fit pl-0 shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
      <div className="absolute inset-0 dotted-background"></div>
      <div className="relative  z-10 px-[1rem] py-[16px] lg:pl-[1rem]  ">
        {/* Total volume section with eye icon */}
        <div className="flex items-center">
          <span className="text-[#B0B0B0] text-[16px] font-medium  lg:pl-0">Total volume</span>
          <button onClick={() => setIsHidden(!isHidden)} className="ml-2 p-1 rounded-full cursor-pointer hover:bg-gray-100">
            {isHidden ? (
              <EyeOff size={16} className="text-[#B0B0B0]" />
            ) : (
              <Eye size={16} className="text-[#B0B0B0]" />
            )}
          </button>
        </div>

        {/* Volume value and Switch to NGN in column layout */}
        <div className="flex flex-col gap-[0.5rem]  lg:pl-0">
          <span className="lg:text-[32px] text-[20px] text-[#121212] font-bold">
            {isHidden ? "⊛⊛⊛⊛⊛⊛" : (
             
                <NumberFlow 
                  value={currentValue}
                  suffix=" USDC"
                />
              
            )}
          </span>

          {/* Switch to NGN button with gradient text */}
          <button className="cursor-pointer px-[8px] py-[4px] text-[12px] rounded-full w-fit bg-white border border-[#EDEDED] shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(90deg, #4AA3FF 0%, #7276F9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Switch to NGN
            </span>
          </button>
        </div>

        {/* Buttons with 52px spacing from top */}
        <div className="lg:mt-[45px] mt-[35px]  flex gap-[5px]  items-center  lg:justify-items-start lg:items-start  lg:gap-[12px] ">
          <PrimaryButton className="cursor-pointer flex  lg:m-0 items-center justify-center m-auto" shortcut="" onClick={openDialog}>
            <div className="flex items-center w-fit">
              <Zap className=" h-3 w-3 mr-1" />
              <span className="text-[12px] lg:text-[16px] ">Start accepting crypto</span>
            </div>
          </PrimaryButton>

          <SecondaryButton className="cursor-pointer w-full">
            <div className="flex flex-row items-center w-full whitespace-nowrap  ">
              <Image
                src={share}
                width={15}
                height={15}
                alt="share"
                className="w-[15px] h-[15px]"
              />
              <span className="text-[12px] lg:text-[16px] ">Apply for payments kit</span>
            </div>
          </SecondaryButton>
        </div>

        {/* Supercharge text with 6px spacing */}
        <div className="mt-[6px]">
          <p className="text-[14px] text-[#B0B0B0]">Supercharge your business with our payment kit</p>
        </div>
      </div>

      <style jsx>{`
        .dotted-background {
          background-image: radial-gradient(#E0E0E0 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  )
} 