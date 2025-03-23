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
  const [currentValue, setCurrentValue] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const targetValue = 300
  
  // This ensures consistent rendering between server and client
 

  return (
    <div className="relative lg:w-[573px]  bg-[#FFFFFF]  rounded-[20px] grid lg:items-start lg:justify-normal md:items-start md:justify-normal items-center justify-center w-screen pl-0 shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
      <div className="absolute inset-0 dotted-background"></div>
      <div className="relative z-10 px-[24px] py-[16px] lg:pl-[1rem] pl-[2.3rem] ">
        {/* Total volume section with eye icon */}
        <div className="flex items-center">
          <span className="text-[#B0B0B0] text-[16px] font-medium pl-[0.5rem] lg:pl-0">Total volume</span>
          <button onClick={() => setIsHidden(!isHidden)} className="ml-2 p-1 rounded-full cursor-pointer hover:bg-gray-100">
            {isHidden ? (
              <EyeOff size={16} className="text-[#B0B0B0]" />
            ) : (
              <Eye size={16} className="text-[#B0B0B0]" />
            )}
          </button>
        </div>

        {/* Volume value and Switch to NGN in column layout */}
        <div className="flex flex-col pl-[0.5rem] lg:pl-0">
          <span className="text-[32px] text-[#121212] font-bold">
            {isHidden ? "⊛⊛⊛⊛⊛⊛" : (
              isMounted ? (
                <NumberFlow 
                  value={currentValue}
                  suffix=" USDC"
                />
              ) : "0 USDC"
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
        <div className="mt-[52px] flex gap-[5px] lg:gap-[12px]">
          <PrimaryButton className="cursor-pointer" shortcut="" onClick={openDialog}>
            <div className="flex items-center">
              <Zap className="mr-2 h-4 w-4" />
              <span>Start accepting crypto</span>
            </div>
          </PrimaryButton>

          <SecondaryButton className="cursor-pointer min-w-max">
            <div className="flex flex-row items-center whitespace-nowrap gap-[0.2rem]">
              <Image
                src={share}
                width={20}
                height={20}
                alt="share"
                className="w-[20px] h-[20px]"
              />
              <span>Apply for payments kit</span>
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